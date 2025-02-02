import { ethers } from "hardhat";

const CLASS_NAME = "TestContractStringUtils";

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contract with account:", deployer.address);

    const MyContract = await ethers.getContractFactory(CLASS_NAME);
    const myContract = await MyContract.deploy();

    console.log("Contract deployed at: ", await myContract.getAddress());
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});




