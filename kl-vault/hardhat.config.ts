import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
require("dotenv").config(); // or import dotenv from "dotenv" if using TS

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
  kavaTest: {
    url: "https://evm.testnet.kava.io",
    chainId: 2221,
    accounts: [process.env.PRIVKEY]
  },
  kavaMain: {
    url: "https://kava-evm.publicnode.com",
    chainId: 2222,
    accounts: [process.env.PRIVKEY]
  }
}
};

export default config;