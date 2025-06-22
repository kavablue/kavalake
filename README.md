# KavaLake • Liquid Staking for Kava EVM

![Tests](https://github.com/kavablue/kavalake/actions/workflows/test.yml/badge.svg)
![License](https://img.shields.io/badge/license-MIT-blue)

**KavaLake** is a liquid staking protocol for [Kava EVM](https://www.kava.io/), enabling users to stake **WKAVA** and receive **kKAVA**, a yield-bearing ERC-4626 receipt token.

Stake your WKAVA → mint kKAVA → earn auto-compounding staking rewards while staying liquid across DeFi.

---

## ✨ Key Features

- 🔹 **ERC-4626 Vault**: kKAVA tracks share-price — yield is auto-compounded over time
- 🔹 **Fully Non-Custodial**: validator delegation and rewards handled on-chain
- 🔹 **Guardrails**: deposit caps, pause switch, harvest controls
- 🔹 **Composable**: kKAVA can be integrated into DEXs, lending markets, and more
- 🔹 **Upgradeable**: architecture allows future validator rotation and slashing coverage
- 🔹 **Open Source** under [MIT License](LICENSE)

---

## 📦 Contracts

| Contract            | Address                                                              | Description                     |
|---------------------|----------------------------------------------------------------------|---------------------------------|
| `KavaLakeVault`     | `0x46ffa1b9a9f027fA958dF9276e3EdCf099A58882`                         | Main liquid staking vault       |
| `RewardHarvester`   | (upcoming)                                                           | Feeds Cosmos staking rewards    |
| `kKAVA`             | (same as vault, standard ERC-4626)                                   | Liquid staking receipt token    |

---

## 🧑‍💻 Quick Start (Local Dev)

```bash
git clone https://github.com/kavablue/kavalake.git
cd kavalake
npm install
cp .env.example .env         # fill in your RPC_URL and PRIVATE_KEY
npx hardhat test