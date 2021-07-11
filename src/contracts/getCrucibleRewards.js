import bigNumberishToNumber from '../bigNumberishToNumber.js';
import contracts from './abi/contracts.js';
import getContract from './getContract.js';
import getProvider from './getProvider.js';

const provider = getProvider();

export default async function getCrucibleRewards(crucibleId) {
	const crucible = getContract({address: crucibleId, abi: contracts.Crucible.abi}, provider);
	const lockSetCount = await crucible.getLockSetCount();
	const lockDataPromises = [];
	for (let i = 0; i < lockSetCount; i++) {
		lockDataPromises.push(crucible.getLockAt(i));
	}
	const allLockData = await Promise.all(lockDataPromises);
	const rewardProgramMap = {};
	for (const {delegate, token} of allLockData) {
		rewardProgramMap[delegate] = {delegate, token};
	}

	return Promise.all(
		Object.values(rewardProgramMap).map(async ({delegate, token}) => {
			const aludel = getContract({address: delegate, abi: contracts.Aludel.abi}, provider);

			const [aludelData, bonusTokenCountBN] = await Promise.all([
				aludel.getAludelData(),
				aludel.getBonusTokenSetLength()
			]);
			const bonusTokenCount = bigNumberishToNumber(bonusTokenCountBN);

			const bonusTokenPromises = [];
			for (let i = 0; i < bonusTokenCount; i++) {
				bonusTokenPromises.push(aludel.getBonusTokenAtIndex(i));
			}
			const bonusTokens = await Promise.all(bonusTokenPromises);
			const rewardTokens = [aludelData.rewardToken, ...bonusTokens];
			const balanceChecker = getContract(contracts.BalanceChecker, provider);

			const [rewardPoolBalances, vaultData, currentVaultReward] =
				await Promise.all([
					balanceChecker.balances([aludelData.rewardPool], rewardTokens),
					aludel.getVaultData(crucibleId),
					aludel.getCurrentVaultReward(crucibleId)
				]);

			const totalRewardTokenBalance = rewardPoolBalances[0];
			const rewards = rewardPoolBalances.map((totalTokenBalance, tokenIndex) => {
				const balance = totalTokenBalance.mul(currentVaultReward).div(totalRewardTokenBalance);
				return {
					address: rewardTokens[tokenIndex].toLowerCase(),
					balance
				};
			});
			return {
				delegate: delegate.toLowerCase(),
				subscribedTokenAddress: token.toLowerCase(),
				subscribedTokenBalance: vaultData.totalStake,
				rewards
			};
		})
	);
}
