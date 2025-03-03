import { ethers } from 'ethers';
import dotenv from 'dotenv';

dotenv.config();

const RPC_URL = process.env.RPC_URL || '';
if (!RPC_URL) {
  throw new Error('❌ RPC_URL is not set in .env file!');
}

const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS || '';
if (!CONTRACT_ADDRESS) {
  throw new Error('❌ CONTRACT_ADDRESS is not set in .env file!');
}

async function main() {
  const provider = new ethers.JsonRpcProvider(RPC_URL);

  // Use the ABI of the deployed contract!
  const contractAbi = [
    {
      inputs: [
        {
          internalType: 'string',
          name: 'a',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'b',
          type: 'string',
        },
      ],
      name: 'testConcatenation',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'pure',
      type: 'function',
    },
  ];

  const contract = new ethers.Contract(CONTRACT_ADDRESS, contractAbi, provider);

  console.log(`Connected to contract at this address: ${CONTRACT_ADDRESS}`);

  const code = await provider.getCode(CONTRACT_ADDRESS);
  if (code === '0x') {
    throw new Error(
      'The contract does not exists on this address, maybe it should be deployed again.'
    );
  }

  const signer = await provider.getSigner();
  const contractWithSigner = contract.connect(signer);

  const result: number = await (contractWithSigner as any).testConcatenation('Tony + ', 'Sziszi');
  console.log('Result string: ', result);
}

main().catch((error) => {
  console.error('Hiba történt:', error);
  process.exit(1);
});
