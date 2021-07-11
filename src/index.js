import bigNumberishToNumber from './bigNumberishToNumber.js';
import getCrucibleRewards from './contracts/getCrucibleRewards.js';
import tokenData from './contracts/tokenData.js';
import getCrucibleId from './getCrucibleId.js';
import saveHistory from './saveHistory.js';

const pollRate = 20; // samples per day
const pollInterval = (1000 * 60 * 60 * 24) / pollRate;
let nextUpdateTime = Date.now();
const crucibleId = getCrucibleId();
const rewardHistory = {};

const knownRewardPrograms = {
	'0xf0D415189949d913264A454F57f4279ad66cB24d': 'Aludel v1',
	'0x93c31fc68E613f9A89114f10B38F9fd2EA5de6BC': 'Aludel v1.5',
};

for (const address of Object.keys(knownRewardPrograms)) {
	knownRewardPrograms[address.toLowerCase()] = knownRewardPrograms[address];
}

async function update() {
	nextUpdateTime += pollInterval;
	const crucibleRewards = await getCrucibleRewards(crucibleId);
	for (const {delegate, rewards} of crucibleRewards) {
		if (!rewardHistory[delegate]) {
			rewardHistory[delegate] = [];
			const headers = ['timestamp'];
			for (const {address} of rewards) {
				const {name} = await tokenData.getToken(address);
				headers.push(name);
			}
			rewardHistory[delegate].push(headers);
		}
		const history = rewardHistory[delegate];
		const record = [Date.now()];
		for (const {address, balance} of rewards) {
			const {decimals} = await tokenData.getToken(address);
			const value = bigNumberishToNumber(balance, decimals);
			record.push(value);
		}
		history.push(record);
	}
	for (const delegate of Object.keys(rewardHistory)) {
		const name = knownRewardPrograms[delegate] || delegate;
		await saveHistory(name, rewardHistory[delegate]);
	}

	setTimeout(() => {
		update().catch(console.error);
	}, nextUpdateTime - Date.now());
}

update().catch(console.error);
