import { ethers } from "ethers";

async function main() {
  const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");

  // Ellenőrizd, hogy a szerződés címe helyes
  const contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"; // Frissítsd ha szükséges
  
  const contractAbi = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "string1",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "string2",
          "type": "string"
        }
      ],
      "name": "ConcateStrs",
      "outputs": [
        {
          "internalType": "string",
          "name": "concatedStrings",
          "type": "string"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    }
  ];
  
  const contract = new ethers.Contract(contractAddress, contractAbi, provider);

  console.log(`Kapcsolódva a szerződéshez: ${contractAddress}`);

  const code = await provider.getCode(contractAddress);
  if (code === "0x") {
    throw new Error("A szerződés nem létezik ezen a címen! Lehet, hogy újra kell deployolni.");
  }

  const signer = await provider.getSigner(); 
  const contractWithSigner = contract.connect(signer);

  const concatenated: string = await (contractWithSigner as any).ConcateStrs("Tony + ", "Sziszi");
  console.log("Eredmény: ", concatenated);
}

main().catch((error) => {
  console.error("Hiba történt:", error);
  process.exit(1);
});