# KavaLake • Liquid Staking for Kava EVM

![Tests](https://github.com/kavablue/kavalake/actions/workflows/test.yml/badge.svg)
![License](https://img.shields.io/badge/license-MIT-blue)

Stake **WKAVA → receive kKAVA** — earn staking yield while staying liquid across DeFi.

## ✨ Key Features
- 🔹 **ERC-4626 Vault** — auto-compounding share price  
- 🔹 **Non-custodial** — delegations on‐chain, pausable guard  
- 🔹 **Open-source** under MIT License  
- 🔹 Roadmap: validator rotation • restaking adapters • DAO

## 🛠 Quick Start

```bash
git clone https://github.com/kavablue/kavalake.git
cd kavalake && npm i
cp .env.example .env            # add RPC_URL & PRIVATE_KEY
npx hardhat test
