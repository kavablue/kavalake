const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  const wrappedKava = hre.ethers.getAddress(process.env.KAVA_WRAPPED); // checksummed

  console.log("Deploying from:", deployer.address);
  console.log("Using wrapped KAVA:", wrappedKava);

  const Vault = await hre.ethers.getContractFactory("KlusterMiniVault");
  const vault = await Vault.deploy(wrappedKava);

  // ✅ waitForDeployment is correct in ethers v6
  await vault.waitForDeployment();

  // ✅ print the actual deployed address
  console.log("Vault deployed to:", await vault.getAddress());
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});