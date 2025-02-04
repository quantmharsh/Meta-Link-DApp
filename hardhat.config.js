require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config(); 
const privateKey = process.env.PRIVATE_KEY;
if (!privateKey) {
  throw new Error("❌ PRIVATE_KEY is missing in .env file");
}
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork:"localhost",
  networks:{
    hardhat:{
      chainId:4202
    },
    sepolia:{
      url:"https://rpc.sepolia-api.lisk.com",
      accounts:[privateKey],
      gasPrice:1000000000,
    },
    BitTorrent:{
      url:"https://pre-rpc.bt.io/",
      accounts:[privateKey],
      gasPrice:1000000000,
    },  zkEVMCardonaTestnet: {
      url: "https://polygon-zkevm-cardona.blockpi.network/v1/rpc/public",
      accounts: [privateKey],
      gas: 6000000,
      gasPrice: 20000000000,
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [privateKey],
    },
    matic: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/2bGIFu-iEnl9RvAOTe1ddZI2gBnuYQGS",
      accounts: [privateKey],
    },

  },
  solidity: "0.8.28",
  allowUnlimitedContractSize: true,
  throwOnTransactionFailures: true,
  throwOnCallFailures: true,
  loggingEnabled: true,
};
