const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  const tokenAddress = hre.ethers.getAddress(process.env.KAVA_WRAPPED); // real WKAVA

  console.log("Deploying from:", deployer.address);
  console.log("Using real WKAVA:", tokenAddress);

  const Vault = await hre.ethers.getContractFactory("KlusterMiniVault");
  const vault = await Vault.deploy(tokenAddress);
  await vault.waitForDeployment();

  const vaultAddress = await vault.getAddress();
  console.log("✅ Vault deployed at:", vaultAddress);

  // ✅ Ensure 'deployments/' folder exists
  const path = "./deployments";
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }

  // ✅ Save the address to JSON file
  fs.writeFileSync(
    `${path}/kluster-mainnet.json`,
    JSON.stringify({ vault: vaultAddress }, null, 2)
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});