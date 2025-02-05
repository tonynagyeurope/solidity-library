import { ethers } from "ethers";

async function main() {
  const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");

  // Always check if this is the correct address!
  const contractAddress = ""; // Provide contract address here
  
  // Use the ABI of the deployed contract!
  const contractAbi = [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "y",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    }
  ];
  
  const contract = new ethers.Contract(contractAddress, contractAbi, provider);

  console.log(`Connected to contract at this address: ${contractAddress}`);

  const code = await provider.getCode(contractAddress);
  if (code === "0x") {
    throw new Error("The contract does not exists on this address, maybe it should be deployed again.");
  }

  const signer = await provider.getSigner(); 
  const contractWithSigner = contract.connect(signer);

  const result: number = await (contractWithSigner as any).x;
  console.log("Result string: ", result);
}

main().catch((error) => {
  console.error("Hiba történt:", error);
  process.exit(1);
});