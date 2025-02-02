import { ethers } from "ethers";

async function main() {
  const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");

  // Always check if this is the correct address!
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  
  // Use the ABI of the TestContractStringUtils !!!
  const contractAbi = [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "a",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "b",
          "type": "string"
        }
      ],
      "name": "testConcatenation",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
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

  const concatenated: string = await (contractWithSigner as any).testConcatenation("Test - ", "Term");
  console.log("Eredmény: ", concatenated);
}

main().catch((error) => {
  console.error("Hiba történt:", error);
  process.exit(1);
});