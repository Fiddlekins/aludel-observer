export default [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "ownerAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "rewardPoolFactory",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "powerSwitchFactory",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "stakingToken",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "rewardToken",
				"type": "address"
			},
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "floor",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "ceiling",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "time",
						"type": "uint256"
					}
				],
				"internalType": "struct IAludel.RewardScaling",
				"name": "rewardScaling",
				"type": "tuple"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "rewardPool",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "powerSwitch",
				"type": "address"
			}
		],
		"name": "AludelCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "duration",
				"type": "uint256"
			}
		],
		"name": "AludelFunded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "token",
				"type": "address"
			}
		],
		"name": "BonusTokenRegistered",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "vault",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "RewardClaimed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "vault",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Staked",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "vault",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Unstaked",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "factory",
				"type": "address"
			}
		],
		"name": "VaultFactoryRegistered",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "factory",
				"type": "address"
			}
		],
		"name": "VaultFactoryRemoved",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "BASE_SHARES_PER_WEI",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "MAX_REWARD_TOKENS",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "MAX_STAKES_PER_VAULT",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "unlockedRewards",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "stakeAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "stakeDuration",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalStakeUnits",
				"type": "uint256"
			},
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "floor",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "ceiling",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "time",
						"type": "uint256"
					}
				],
				"internalType": "struct IAludel.RewardScaling",
				"name": "rewardScaling",
				"type": "tuple"
			}
		],
		"name": "calculateReward",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "reward",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "timestamp",
						"type": "uint256"
					}
				],
				"internalType": "struct IAludel.StakeData[]",
				"name": "stakes",
				"type": "tuple[]"
			},
			{
				"internalType": "uint256",
				"name": "unstakeAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "unlockedRewards",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalStakeUnits",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "floor",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "ceiling",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "time",
						"type": "uint256"
					}
				],
				"internalType": "struct IAludel.RewardScaling",
				"name": "rewardScaling",
				"type": "tuple"
			}
		],
		"name": "calculateRewardFromStakes",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "lastStakeAmount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "newStakesCount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "reward",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "newTotalStakeUnits",
						"type": "uint256"
					}
				],
				"internalType": "struct IAludel.RewardOutput",
				"name": "out",
				"type": "tuple"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "start",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "end",
				"type": "uint256"
			}
		],
		"name": "calculateStakeUnits",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "stakeUnits",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "timestamp",
						"type": "uint256"
					}
				],
				"internalType": "struct IAludel.StakeData[]",
				"name": "stakes",
				"type": "tuple[]"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "calculateTotalStakeUnits",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "totalStakeUnits",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "duration",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "start",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "shares",
						"type": "uint256"
					}
				],
				"internalType": "struct IAludel.RewardSchedule[]",
				"name": "rewardSchedules",
				"type": "tuple[]"
			},
			{
				"internalType": "uint256",
				"name": "rewardBalance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "sharesOutstanding",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "calculateUnlockedRewards",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "unlockedRewards",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "duration",
				"type": "uint256"
			}
		],
		"name": "fund",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAludelData",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "stakingToken",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "rewardToken",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "rewardPool",
						"type": "address"
					},
					{
						"components": [
							{
								"internalType": "uint256",
								"name": "floor",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "ceiling",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "time",
								"type": "uint256"
							}
						],
						"internalType": "struct IAludel.RewardScaling",
						"name": "rewardScaling",
						"type": "tuple"
					},
					{
						"internalType": "uint256",
						"name": "rewardSharesOutstanding",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "totalStake",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "totalStakeUnits",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "lastUpdate",
						"type": "uint256"
					},
					{
						"components": [
							{
								"internalType": "uint256",
								"name": "duration",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "start",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "shares",
								"type": "uint256"
							}
						],
						"internalType": "struct IAludel.RewardSchedule[]",
						"name": "rewardSchedules",
						"type": "tuple[]"
					}
				],
				"internalType": "struct IAludel.AludelData",
				"name": "aludel",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getBonusTokenAtIndex",
		"outputs": [
			{
				"internalType": "address",
				"name": "bonusToken",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getBonusTokenSetLength",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "length",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "vault",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "stakeAmount",
				"type": "uint256"
			}
		],
		"name": "getCurrentStakeReward",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "reward",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getCurrentTotalStakeUnits",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "totalStakeUnits",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getCurrentUnlockedRewards",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "unlockedRewards",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "vault",
				"type": "address"
			}
		],
		"name": "getCurrentVaultReward",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "reward",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "vault",
				"type": "address"
			}
		],
		"name": "getCurrentVaultStakeUnits",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "stakeUnits",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "vault",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "stakeAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "getFutureStakeReward",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "reward",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "getFutureTotalStakeUnits",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "totalStakeUnits",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "getFutureUnlockedRewards",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "unlockedRewards",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "vault",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "getFutureVaultReward",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "reward",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "vault",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "getFutureVaultStakeUnits",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "stakeUnits",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getPowerController",
		"outputs": [
			{
				"internalType": "address",
				"name": "controller",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getPowerSwitch",
		"outputs": [
			{
				"internalType": "address",
				"name": "powerSwitch",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "vault",
				"type": "address"
			}
		],
		"name": "getVaultData",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "totalStake",
						"type": "uint256"
					},
					{
						"components": [
							{
								"internalType": "uint256",
								"name": "amount",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "timestamp",
								"type": "uint256"
							}
						],
						"internalType": "struct IAludel.StakeData[]",
						"name": "stakes",
						"type": "tuple[]"
					}
				],
				"internalType": "struct IAludel.VaultData",
				"name": "vaultData",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getVaultFactoryAtIndex",
		"outputs": [
			{
				"internalType": "address",
				"name": "factory",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getVaultFactorySetLength",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "length",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "isOffline",
		"outputs": [
			{
				"internalType": "bool",
				"name": "status",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "isOnline",
		"outputs": [
			{
				"internalType": "bool",
				"name": "status",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "isShutdown",
		"outputs": [
			{
				"internalType": "bool",
				"name": "status",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "target",
				"type": "address"
			}
		],
		"name": "isValidAddress",
		"outputs": [
			{
				"internalType": "bool",
				"name": "validity",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "target",
				"type": "address"
			}
		],
		"name": "isValidVault",
		"outputs": [
			{
				"internalType": "bool",
				"name": "validity",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rageQuit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "bonusToken",
				"type": "address"
			}
		],
		"name": "registerBonusToken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "factory",
				"type": "address"
			}
		],
		"name": "registerVaultFactory",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "factory",
				"type": "address"
			}
		],
		"name": "removeVaultFactory",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "rescueTokensFromRewardPool",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "vault",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "permission",
				"type": "bytes"
			}
		],
		"name": "stake",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "vault",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "permission",
				"type": "bytes"
			}
		],
		"name": "unstakeAndClaim",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];