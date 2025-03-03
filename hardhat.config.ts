import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-ethers';
import '@nomicfoundation/hardhat-toolbox';

const config: HardhatUserConfig = {
  solidity: '0.8.20',
  networks: {
    hardhat: {
      chainId: 31337, // Hardhat saját chain ID-je
    },
    localhost: {
      url: 'http://127.0.0.1:8545',
    },
  },
};

export default config;
