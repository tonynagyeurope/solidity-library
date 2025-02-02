import hre from "hardhat";
const { ethers } = hre;

const CONTRACT_NAME = "TestContractStringUtils"; 

async function main() {
    console.log("🚀 Deploying contract...");

    // Get signer
    const [deployer] = await ethers.getSigners();
    console.log(`📢 Deploying contract with account: ${deployer.address}`);

    // Get contract factory
    const ContractFactory = await ethers.getContractFactory(CONTRACT_NAME);
    const contract = await ContractFactory.deploy(); // Deploy contract

    await contract.waitForDeployment(); // Várjuk meg, amíg a szerződés teljesen települ

    console.log(`✅ Contract deployed at address: ${await contract.getAddress()}`);
}

main().catch((error) => {
    console.error("❌ Deployment failed:", error);
    process.exitCode = 1;
});





