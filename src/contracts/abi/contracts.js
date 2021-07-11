import Aludel from './AludelABI.js';
import BalanceChecker from './BalanceCheckerABI.js';
import Crucible from './CrucibleABI.js';
import ERC20 from './ERC20ABI.js';

const contracts = {
	Crucible: {
		address: '0xCF576F74BA3B01CDC04E04305055446D1649BD07',
		abi: Crucible
	},
	Aludel: {
		address: '0xf0D415189949d913264A454F57f4279ad66cB24d',
		abi: Aludel
	},
	ERC20: {
		address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
		abi: ERC20
	},
	BalanceChecker: {
		address: '0xb1F8e55c7f64D203C1400B9D8555d050F94aDF39',
		abi: BalanceChecker
	}
};

export default contracts;
