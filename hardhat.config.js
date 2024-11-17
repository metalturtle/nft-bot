/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle")
require("dotenv").config()
require("@openzeppelin/hardhat-upgrades")
require("@nomiclabs/hardhat-etherscan")
require("@nomiclabs/hardhat-solhint")
require("hardhat-gas-reporter")
require("solidity-coverage")
require("@nomiclabs/hardhat-ethers")

// ^0.4.18
module.exports = {
    solidity: {
        compilers: [
            {
                version: "0.4.18",
                settings: {
                    viaIR: true,
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
            {
                version: "0.8.19",
                settings: {
                    viaIR: true,
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
        ],
        //  gas:7000000,
        gasMultiplier: 2,
        //  gasPrice:7.3,
    },
    mocha: {
        timeout: 70000,
    },
    defaultNetwork: "hardhat",

    networks: {
        fantomtest: {
            url: "https://rpc.testnet.fantom.network",
            chainId: 4002,
            accounts: [`${process.env.PKEY}`],
        },
        ethereum: {
            url: "https://eth.llamarpc.com",
            accounts: [`${process.env.HARDHAT_PKEY}`],
            accounts: [
                `0x${process.env.PKEY0}`,
                `0x${process.env.PKEY1}`,
                `0x${process.env.PKEY2}`,
                `0x${process.env.PKEY3}`,
                `0x${process.env.PKEY4}`,
                `0x${process.env.PKEY5}`,
                `0x${process.env.BOB_PRIVATE_KEY}`,
                `0x${process.env.BOB2_PK}`,
                `0x${process.env.SUBNET2_PK}`,
                `0x${process.env.SUBNET3_PK}`,
                `0x${process.env.PKEY6}`,
            ],
        },
        digitalOcean: {
            url: "http://64.227.149.96:8545/",
            accounts: [`${process.env.HARDHAT_PKEY}`],
        },
        matictest: {
            // url: "https://endpoints.omniatech.io/v1/matic/mumbai/public",
            url: "https://rpc.ankr.com/polygon_mumbai",
            // url: "https://rpc-mumbai.maticvigil.com",
            accounts: [
                `0x${process.env.PKEY0}`,
                `0x${process.env.PKEY1}`,
                `0x${process.env.PKEY2}`,
                `0x${process.env.PKEY3}`,
                `0x${process.env.PKEY4}`,
                `0x${process.env.PKEY5}`,
                `0x${process.env.BOB_PRIVATE_KEY}`,
                `0x${process.env.BOB2_PK}`,
                `0x${process.env.SUBNET2_PK}`,
                `0x${process.env.SUBNET3_PK}`,
                `0x${process.env.PKEY6}`,
            ],
        },
        amoy: {
            // url: "https://endpoints.omniatech.io/v1/matic/mumbai/public",
            url: "https://rpc-amoy.polygon.technology",
            // url: "https://rpc-mumbai.maticvigil.com",
            accounts: [
                `0x${process.env.PKEY0}`,
                `0x${process.env.PKEY1}`,
                `0x${process.env.PKEY2}`,
                `0x${process.env.PKEY3}`,
                `0x${process.env.PKEY4}`,
                `0x${process.env.PKEY5}`,
                `0x${process.env.BOB_PRIVATE_KEY}`,
                `0x${process.env.BOB2_PK}`,
                `0x${process.env.SUBNET2_PK}`,
                `0x${process.env.SUBNET3_PK}`,
                `0x${process.env.PKEY6}`,
            ],
        },
        sepolia: {
            // url: "https://endpoints.omniatech.io/v1/matic/mumbai/public",
            url: "https://ethereum-sepolia-rpc.publicnode.com",
            // url: "https://rpc-mumbai.maticvigil.com",
            accounts: [
                `0x${process.env.PKEY0}`,
                `0x${process.env.PKEY1}`,
                `0x${process.env.PKEY2}`,
                `0x${process.env.PKEY3}`,
                `0x${process.env.PKEY4}`,
                `0x${process.env.PKEY5}`,
                `0x${process.env.BOB_PRIVATE_KEY}`,
                `0x${process.env.BOB2_PK}`,
                `0x${process.env.SUBNET2_PK}`,
                `0x${process.env.SUBNET3_PK}`,
                `0x${process.env.PKEY6}`,
            ],
        },
        maticmain: {
            url: "https://polygon-rpc.com/",
            // accounts: [`${process.env.PKEY}`],
            accounts: [
                `0x${process.env.PKEY0}`,
                `0x${process.env.PKEY1}`,
                `0x${process.env.PKEY2}`,
                `0x${process.env.PKEY3}`,
                `0x${process.env.PKEY4}`,
                `0x${process.env.PKEY5}`,
                `0x${process.env.BOB_PRIVATE_KEY}`,
                `0x${process.env.BOB2_PK}`,
                `0x${process.env.SUBNET2_PK}`,
                `0x${process.env.SUBNET3_PK}`,
                `0x${process.env.PKEY6}`,
            ],
        },
        arbitrum: {
            url: "https://arbitrum.llamarpc.com",
            // accounts: [`${process.env.PKEY}`],
            accounts: [
                `0x${process.env.PKEY0}`,
                `0x${process.env.PKEY1}`,
                `0x${process.env.PKEY2}`,
                `0x${process.env.PKEY3}`,
                `0x${process.env.PKEY4}`,
                `0x${process.env.PKEY5}`,
                `0x${process.env.BOB_PRIVATE_KEY}`,
                `0x${process.env.BOB2_PK}`,
                `0x${process.env.SUBNET2_PK}`,
                `0x${process.env.SUBNET3_PK}`,
                `0x${process.env.PKEY6}`,
            ],
        },
        mode: {
            url: "https://mainnet.mode.network",
            accounts: [
                `0x${process.env.PKEY0}`,
                `0x${process.env.PKEY1}`,
                `0x${process.env.PKEY2}`,
                `0x${process.env.PKEY3}`,
                `0x${process.env.PKEY4}`,
                `0x${process.env.PKEY5}`,
                `0x${process.env.BOB_PRIVATE_KEY}`,
                `0x${process.env.BOB2_PK}`,
                `0x${process.env.SUBNET2_PK}`,
                `0x${process.env.SUBNET3_PK}`,
                `0x${process.env.PKEY6}`,
            ],
        },
        opstack: {
            // url: "https://geth.stackosdev-op-184694.zeeve.online/0a093bedc5ab64cbee62c5af2ae13215afa4149a09ba3f25e06cd3f5cd1eea5c/rpc",
            url: "https://opgeth.stackosdev-op-184694.zeeve.online/0b32ecbc719029a9726b4b993caceeb460de3f57163a9363b5ff86e0e04363ba/rpc",
            accounts: [
                `0x${process.env.PKEY0}`,
                `0x${process.env.PKEY1}`,
                `0x${process.env.PKEY2}`,
                `0x${process.env.PKEY3}`,
                `0x${process.env.PKEY4}`,
                `0x${process.env.PKEY5}`,
                `0x${process.env.BOB_PRIVATE_KEY}`,
                `0x${process.env.BOB2_PK}`,
                `0x${process.env.SUBNET2_PK}`,
                `0x${process.env.SUBNET3_PK}`,
                `0x${process.env.PKEY6}`,
            ],
        },
        arbitrumSepolia: {
            url: "https://arbitrum-sepolia.blockpi.network/v1/rpc/public",
            accounts: [
                `0x${process.env.PKEY0}`,
                `0x${process.env.PKEY1}`,
                `0x${process.env.PKEY2}`,
                `0x${process.env.PKEY3}`,
                `0x${process.env.PKEY4}`,
                `0x${process.env.PKEY5}`,
                `0x${process.env.BOB_PRIVATE_KEY}`,
                `0x${process.env.BOB2_PK}`,
                `0x${process.env.SUBNET2_PK}`,
                `0x${process.env.SUBNET3_PK}`,
                `0x${process.env.PKEY6}`,
            ],
        },
        hardhat: {
            allowUnlimitedContractSize: true,
            chainId: 1337,
            // forking: {
            //     url: "https://polygon-mainnet.g.alchemy.com/v2/BRnyQKRn-PuNxoiwE--0P7YEHI9amUbp",
            //     // url: "https://mainnet.mode.network",
            // },
        },
        polyedge1: {
            url: "http://localhost:11002",
            accounts: [`${process.env.PEDGE1_KEY}`],
        },
        polyedge2: {
            url: "http://localhost:15002",
            accounts: [`${process.env.PEDGE2_KEY}`],
        },
        stackos: {
            url: "https://validator1.stackos-testnet.polygon.zeeve.net",
            accounts: [
                `0x${process.env.STACKOS_DEPLOYER}`,
                `0x${process.env.PKEY1}`,
                `0x${process.env.PKEY2}`,
                `0x${process.env.PKEY3}`,
                `0x${process.env.PKEY4}`,
                `0x${process.env.PKEY5}`,
                `0x${process.env.BOB_PRIVATE_KEY}`,
                `0x${process.env.BOB2_PK}`,
                `0x${process.env.SUBNET2_PK}`,
                `0x${process.env.SUBNET3_PK}`,
            ],
        },
        skynet: {
            url: "https://sequencer.skynet.zeeve.net",
            // url: "https://resistance.skynet.io",
            accounts: [
                `0x${process.env.PKEY0}`,
                `0x${process.env.PKEY1}`,
                `0x${process.env.PKEY2}`,
                `0x${process.env.PKEY3}`,
                `0x${process.env.PKEY4}`,
                `0x${process.env.PKEY5}`,
                `0x${process.env.BOB_PRIVATE_KEY}`,
                `0x${process.env.BOB2_PK}`,
                `0x${process.env.SUBNET2_PK}`,
                `0x${process.env.SUBNET3_PK}`,
                `0x${process.env.PKEY6}`,
            ],
        },
    },
    etherscan: {
        apiKey: {
            arbitrumSepolia: "A8KFMIE6IC8JQ8SKCPG2MKDR6AAUMU4UCT",
        },
        customChains: [
            {
                network: "arbitrumSepolia",
                chainId: 421614,
                urls: {
                    apiURL: "https://api-sepolia.arbiscan.io/api",
                    browserURL: "https://sepolia.arbiscan.io/",
                },
            },
        ],
    },
    bscscan: {
        apiKey: "S1PFEYDQ5SXJSKTB2UE6YXAKF2XDV2Y4EV",
    },
}
