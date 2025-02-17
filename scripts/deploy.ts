import { ethers } from "hardhat";
import dotenv from "dotenv";

dotenv.config();

const CONTRACT_NAME = process.env.CONTRACT_NAME || "";
if (!CONTRACT_NAME) {
    throw new Error("❌ CONTRACT_NAME is not set in .env file!");
}

async function main() {
    console.log("🚀 Deploying contract...");

    const provider = new ethers.JsonRpcProvider(process.env.RPC_URL!);
    const deployer = new ethers.Wallet(process.env.DEPLOYER_PRIVATE_KEY!, provider);

    console.log(`📢 Deploying contract with account: ${deployer.address}`);

    const ContractFactory = await ethers.getContractFactory(CONTRACT_NAME);
    const contract = await ContractFactory.connect(deployer).deploy();

    await contract.waitForDeployment();

    console.log(`✅ Contract deployed at address: ${await contract.getAddress()}`);
}

main().catch((error) => {
    console.error("❌ Deployment failed:", error);
    process.exitCode = 1;
});
