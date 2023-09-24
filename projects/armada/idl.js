const ArmadaIDL = {
  "version": "0.1.1",
  "name": "clp_vault",
  "instructions": [],
  "accounts": [
    {
      "name": "clpVault",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bumpSeed",
            "type": "u8"
          },
          {
            "name": "padding0",
            "type": {
              "array": [
                "u8",
                15
              ]
            }
          },
          {
            "name": "nonce",
            "docs": [
              "A nonce to allow more than one CLP Vault with the same trading pair for the same admin"
            ],
            "type": "u16"
          },
          {
            "name": "padding1",
            "type": {
              "array": [
                "u8",
                14
              ]
            }
          },
          {
            "name": "clp",
            "docs": [
              "The address of the concentrated liquidity pool. E.g. Orca Whirlpool address"
            ],
            "type": "publicKey"
          },
          {
            "name": "lpMint",
            "docs": [
              "The SPL token Mint address for the LP tokens"
            ],
            "type": "publicKey"
          },
          {
            "name": "lpMintBump",
            "type": "u8"
          },
          {
            "name": "padding2",
            "type": {
              "array": [
                "u8",
                15
              ]
            }
          },
          {
            "name": "tokenMintA",
            "docs": [
              "SPL token Mint A of the trading pair"
            ],
            "type": "publicKey"
          },
          {
            "name": "tokenVaultA",
            "docs": [
              "An SPL token Account for staging A tokens"
            ],
            "type": "publicKey"
          },
          {
            "name": "tokenMintB",
            "docs": [
              "SPL Token mint B of the trading pair"
            ],
            "type": "publicKey"
          },
          {
            "name": "tokenVaultB",
            "docs": [
              "An SPL token Account for staging B tokens"
            ],
            "type": "publicKey"
          },
          {
            "name": "performanceFee",
            "docs": [
              "A percentage of the trading fees and rewards taken by the CLP Vault"
            ],
            "type": "u32"
          },
          {
            "name": "padding3",
            "type": {
              "array": [
                "u8",
                12
              ]
            }
          },
          {
            "name": "withdrawalFee",
            "docs": [
              "A fee percentage taken upon withdrawing"
            ],
            "type": "u32"
          },
          {
            "name": "padding4",
            "type": {
              "array": [
                "u8",
                12
              ]
            }
          },
          {
            "name": "marketMakingFee",
            "docs": [
              "A percentage of the performance_fee that gets paid to the market_maker."
            ],
            "type": "u32"
          },
          {
            "name": "padding5",
            "type": {
              "array": [
                "u8",
                12
              ]
            }
          },
          {
            "name": "strategy",
            "docs": [
              "The strategy that is enlisted by the vault"
            ],
            "type": {
              "defined": "StrategyType"
            }
          },
          {
            "name": "padding6",
            "type": {
              "array": [
                "u8",
                15
              ]
            }
          },
          {
            "name": "marketMakingKey",
            "docs": [
              "The key that has the ability to adjust positions and rebalance"
            ],
            "type": "publicKey"
          },
          {
            "name": "adminKey",
            "docs": [
              "The key that has the ability to change the market_making_key and strategy."
            ],
            "type": "publicKey"
          },
          {
            "name": "feeOwner",
            "docs": [
              "The key that must be the owner of SPL Token Accounts that receive fees"
            ],
            "type": "publicKey"
          },
          {
            "name": "numActivePositions",
            "docs": [
              "The number of active Positions the vault has on the CLP"
            ],
            "type": "u8"
          },
          {
            "name": "padding7",
            "type": {
              "array": [
                "u8",
                15
              ]
            }
          },
          {
            "name": "positionBundleTokenAccount",
            "docs": [
              "The TokenAccount owned by the ClpVault that controls the PositionBundle"
            ],
            "type": "publicKey"
          },
          {
            "name": "positionBundleMint",
            "docs": [
              "The mint address of the whirlpool PositionBundle"
            ],
            "type": "publicKey"
          },
          {
            "name": "positionBundle",
            "docs": [
              "The Whirlpool PositionBundle account"
            ],
            "type": "publicKey"
          },
          {
            "name": "positions",
            "docs": [
              "A slice of the active position information"
            ],
            "type": {
              "array": [
                {
                  "defined": "VaultPosition"
                },
                5
              ]
            }
          },
          {
            "name": "initialTokenRatio",
            "docs": [
              "The initial amount of tokenA to tokenB required per LP token when there is 0 liquidity on",
              "positions or in the reserve. This is only used for the inital deposit into the vault."
            ],
            "type": {
              "defined": "TokenRatio"
            }
          },
          {
            "name": "stakePool",
            "docs": [
              "A key indicating the primary StakePool for the vault. This is used as reference for UIs."
            ],
            "type": "publicKey"
          },
          {
            "name": "ratioCache",
            "type": {
              "defined": "VaultRatioCache"
            }
          },
          {
            "name": "reserved0",
            "type": {
              "array": [
                "u8",
                448
              ]
            }
          },
          {
            "name": "reserved1",
            "type": {
              "array": [
                "u128",
                32
              ]
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "VaultRatioCache",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totalTokenA",
            "docs": [
              "Total amount of tokenA managed by the vault"
            ],
            "type": "u64"
          },
          {
            "name": "totalTokenB",
            "docs": [
              "Total amount of tokenB managed by the vault"
            ],
            "type": "u64"
          },
          {
            "name": "lpSupply",
            "docs": [
              "The total supply of vault LP tokens"
            ],
            "type": "u64"
          },
          {
            "name": "cachedAt",
            "docs": [
              "The Unix timestamp for when the cache was last updated"
            ],
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "TokenRatio",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tokenA",
            "docs": [
              "The amount of token a required for the initial deposit"
            ],
            "type": "u64"
          },
          {
            "name": "tokenB",
            "docs": [
              "The amount of token b required for the initial deposit"
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "VaultPosition",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "positionKey",
            "docs": [
              "The underlying CLP position."
            ],
            "type": "publicKey"
          },
          {
            "name": "lowerTick",
            "docs": [
              "The address of the lower TickArray"
            ],
            "type": "i32"
          },
          {
            "name": "padding0",
            "type": {
              "array": [
                "u8",
                12
              ]
            }
          },
          {
            "name": "upperTick",
            "docs": [
              "The address of the upper TickArray"
            ],
            "type": "i32"
          },
          {
            "name": "padding1",
            "type": {
              "array": [
                "u8",
                12
              ]
            }
          },
          {
            "name": "reserve",
            "type": {
              "array": [
                "u128",
                16
              ]
            }
          }
        ]
      }
    },
    {
      "name": "ClpProvider",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "ORCA"
          }
        ]
      }
    },
    {
      "name": "StrategyType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "PriceDiscovery"
          },
          {
            "name": "VolatilePair"
          },
          {
            "name": "StablePair"
          },
          {
            "name": "StableSlowlyDiverging"
          }
        ]
      }
    }
  ],
  "events": [],
  "errors": []
};

const WhirpoolIDL = {
  "version": "0.2.0",
  "name": "whirlpool",
  "instructions": [],
  "accounts": [
    {
      "name": "whirlpoolsConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "feeAuthority",
            "type": "publicKey"
          },
          {
            "name": "collectProtocolFeesAuthority",
            "type": "publicKey"
          },
          {
            "name": "rewardEmissionsSuperAuthority",
            "type": "publicKey"
          },
          {
            "name": "defaultProtocolFeeRate",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "feeTier",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "whirlpoolsConfig",
            "type": "publicKey"
          },
          {
            "name": "tickSpacing",
            "type": "u16"
          },
          {
            "name": "defaultFeeRate",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "positionBundle",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "positionBundleMint",
            "type": "publicKey"
          },
          {
            "name": "positionBitmap",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "position",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "whirlpool",
            "type": "publicKey"
          },
          {
            "name": "positionMint",
            "type": "publicKey"
          },
          {
            "name": "liquidity",
            "type": "u128"
          },
          {
            "name": "tickLowerIndex",
            "type": "i32"
          },
          {
            "name": "tickUpperIndex",
            "type": "i32"
          },
          {
            "name": "feeGrowthCheckpointA",
            "type": "u128"
          },
          {
            "name": "feeOwedA",
            "type": "u64"
          },
          {
            "name": "feeGrowthCheckpointB",
            "type": "u128"
          },
          {
            "name": "feeOwedB",
            "type": "u64"
          },
          {
            "name": "rewardInfos",
            "type": {
              "array": [
                {
                  "defined": "PositionRewardInfo"
                },
                3
              ]
            }
          }
        ]
      }
    },
    {
      "name": "tickArray",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "startTickIndex",
            "type": "i32"
          },
          {
            "name": "ticks",
            "type": {
              "array": [
                {
                  "defined": "Tick"
                },
                88
              ]
            }
          },
          {
            "name": "whirlpool",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "whirlpool",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "whirlpoolsConfig",
            "type": "publicKey"
          },
          {
            "name": "whirlpoolBump",
            "type": {
              "array": [
                "u8",
                1
              ]
            }
          },
          {
            "name": "tickSpacing",
            "type": "u16"
          },
          {
            "name": "tickSpacingSeed",
            "type": {
              "array": [
                "u8",
                2
              ]
            }
          },
          {
            "name": "feeRate",
            "type": "u16"
          },
          {
            "name": "protocolFeeRate",
            "type": "u16"
          },
          {
            "name": "liquidity",
            "type": "u128"
          },
          {
            "name": "sqrtPrice",
            "type": "u128"
          },
          {
            "name": "tickCurrentIndex",
            "type": "i32"
          },
          {
            "name": "protocolFeeOwedA",
            "type": "u64"
          },
          {
            "name": "protocolFeeOwedB",
            "type": "u64"
          },
          {
            "name": "tokenMintA",
            "type": "publicKey"
          },
          {
            "name": "tokenVaultA",
            "type": "publicKey"
          },
          {
            "name": "feeGrowthGlobalA",
            "type": "u128"
          },
          {
            "name": "tokenMintB",
            "type": "publicKey"
          },
          {
            "name": "tokenVaultB",
            "type": "publicKey"
          },
          {
            "name": "feeGrowthGlobalB",
            "type": "u128"
          },
          {
            "name": "rewardLastUpdatedTimestamp",
            "type": "u64"
          },
          {
            "name": "rewardInfos",
            "type": {
              "array": [
                {
                  "defined": "WhirlpoolRewardInfo"
                },
                3
              ]
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "OpenPositionBumps",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "positionBump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "OpenPositionWithMetadataBumps",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "positionBump",
            "type": "u8"
          },
          {
            "name": "metadataBump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "PositionRewardInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "growthInsideCheckpoint",
            "type": "u128"
          },
          {
            "name": "amountOwed",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "Tick",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "initialized",
            "type": "bool"
          },
          {
            "name": "liquidityNet",
            "type": "i128"
          },
          {
            "name": "liquidityGross",
            "type": "u128"
          },
          {
            "name": "feeGrowthOutsideA",
            "type": "u128"
          },
          {
            "name": "feeGrowthOutsideB",
            "type": "u128"
          },
          {
            "name": "rewardGrowthsOutside",
            "type": {
              "array": [
                "u128",
                3
              ]
            }
          }
        ]
      }
    },
    {
      "name": "WhirlpoolRewardInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mint",
            "docs": [
              "Reward token mint."
            ],
            "type": "publicKey"
          },
          {
            "name": "vault",
            "docs": [
              "Reward vault token account."
            ],
            "type": "publicKey"
          },
          {
            "name": "authority",
            "docs": [
              "Authority account that has permission to initialize the reward and set emissions."
            ],
            "type": "publicKey"
          },
          {
            "name": "emissionsPerSecondX64",
            "docs": [
              "Q64.64 number that indicates how many tokens per second are earned per unit of liquidity."
            ],
            "type": "u128"
          },
          {
            "name": "growthGlobalX64",
            "docs": [
              "Q64.64 number that tracks the total tokens earned per unit of liquidity since the reward",
              "emissions were turned on."
            ],
            "type": "u128"
          }
        ]
      }
    },
    {
      "name": "WhirlpoolBumps",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "whirlpoolBump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "CurrIndex",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Below"
          },
          {
            "name": "Inside"
          },
          {
            "name": "Above"
          }
        ]
      }
    },
    {
      "name": "TickLabel",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Upper"
          },
          {
            "name": "Lower"
          }
        ]
      }
    },
    {
      "name": "Direction",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Left"
          },
          {
            "name": "Right"
          }
        ]
      }
    }
  ],
  "errors": []
};

module.exports = {
  ArmadaIDL,
  WhirpoolIDL
}