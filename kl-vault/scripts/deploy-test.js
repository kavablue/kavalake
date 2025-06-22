const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying from:", deployer.address);

  const WKAVA = await hre.ethers.getContractFactory("TestWKAVA");
  const token = await WKAVA.deploy();
  await token.waitForDeployment();
  const tokenAddress = await token.getAddress();
  console.log("✅ Test WKAVA deployed at:", tokenAddress);

  const Vault = await hre.ethers.getContractFactory("KlusterMiniVault");
  const vault = await Vault.deploy(tokenAddress);
  await vault.waitForDeployment();
  console.log("✅ Vault deployed at:", await vault.getAddress());
}
main();