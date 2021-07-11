import {BigNumber} from 'ethers';
import {formatUnits, isBytes} from 'ethers/lib/utils.js';

export default function bigNumberishToNumber(value, units) {
	if (isBytes(value)) {
		throw new Error('bigNumberishToNumber: Bytes not supported');
	}
	if (BigNumber.isBigNumber(value)) {
		value = formatUnits(value, units);
	}
	if (typeof value === 'string') {
		value = parseFloat(value);
	}
	return value;
}
