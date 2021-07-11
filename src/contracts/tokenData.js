import contracts from './abi/contracts.js';
import getContract from './getContract.js';
import getProvider from './getProvider.js';

const provider = getProvider();

class TokenData {
	constructor() {
		this._data = {};
	}

	async getToken(address) {
		if (!this._data[address]) {
			const token = getContract({address, abi: contracts.ERC20.abi}, provider);
			const [name, decimals, symbol] = await Promise.all([
				token.name(),
				token.decimals(),
				token.symbol()
			]);
			this._data[address] = {name, decimals, symbol};
		}
		return this._data[address];
	}
}

export default new TokenData();
