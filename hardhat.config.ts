import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-ethers';
import '@nomicfoundation/hardhat-toolbox';
import 'solidity-coverage';
import 'hardhat-gas-reporter';

const config: HardhatUserConfig = {
  solidity: '0.8.20',
  networks: {
    hardhat: {
      chainId: 31337, // Hardhat's own chain ID
    },
    localhost: {
      url: 'http://127.0.0.1:8545',
    },
  },
  gasReporter: {
    enabled: true,
    outputFile: 'gas-report.txt', // Saves the gas report in this file
    noColors: true, // Proper format for CI
  },
};

export default config;
