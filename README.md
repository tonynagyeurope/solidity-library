# solidity-library

Useful solidity utils for developers by Tony Nagy

# Solidity Library for Crypto Payment Solutions

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## Overview

This project is a Solidity library designed to provide utility functions and helper contracts for a crypto payment solution implemented in another private repository (for www.imagella.com), though it can be used freely in any other projects. The Imagella crypto payment solution is primarily focused on micropayments, offering extremely low transaction fees for low-value transactions (e.g., in the range of $1-$5) while remaining highly cost-effective for larger amounts as well. Additionally, the solution includes a robust fallback mechanism that leverages multiple low-fee networks in case of network congestion or unavailability. The library is continuously developed and documented with NatSpec comments to ensure clear, self-explanatory code.

## Features

- **Utility Contracts:** Provides functions for token management, string operations, and custom error handling.
- **NatSpec Documentation:** Every function and contract includes NatSpec comments for clear documentation.
- **TypeScript Integration:** Supporting scripts for deployment and testing are written in TypeScript.
- **Hardhat Environment:** Uses Hardhat for compiling, testing, and deploying contracts.
- **Cross-Platform Development:** Developed on Linux Ubuntu with a Node.js environment.

## Library Structure

````
contracts/
  CustomErrors.sol       // Custom error definitions with NatSpec
  Modifiers.sol          // Common modifiers for contracts
  StringUtils.sol        // Utility functions for string manipulation
  TokenUtils.sol         // Functions for token management

scripts/
  [Deployment and utility scripts in TypeScript]

test/
  [Hardhat tests for the contracts]

hardhat.config.ts         // Hardhat configuration file
package.json              // Node.js package file
tsconfig.json             // TypeScript configuration file
README.md                 // This file


## Installation

1. **Clone the repository:**

   ```bash
   git clone <REPO_URL>
   cd solidity-library

2. **Install dependencies:**

    npm install

3. **Configure Environment:**

    Ensure Node.js (v14 or later) is installed.
    Set up any environment variables in a .env file if needed.

## Usage

Import the library into your Solidity project as needed. For example:

    // Example usage in a Solidity contract
    import "path/to/contracts/StringUtils.sol";

    contract Example {
        using StringUtils for string;

        function exampleFunction(string memory input) public pure returns (string memory) {
            return input.toUpperCase();
        }
    }

For deployment or running scripts written in TypeScript:

    npx hardhat run scripts/deploy.ts --network <network_name>

## API Documentation

The contracts include NatSpec comments that describe the purpose, parameters, and return values for each function. You can generate API documentation using tools that parse NatSpec comments or refer directly to the source code.

## Testing

Tests are implemented using Hardhat's testing framework. To run the tests, execute:

    npx hardhat test

## Contributing

Contributions are welcome! To contribute:

    Fork the repository.
    Create a new branch for your feature or bug fix.
    Commit your changes with clear messages.
    Submit a pull request detailing your changes.

Please adhere to the existing coding standards and document your code with NatSpec comments where appropriate.

## License

This project is licensed under the MIT License.

## Contact

For further information or any questions, please contact:

    Developer: Tony Nagy
    Email: tony@imagella.com or tony.nagy.europe@gmail.com
    Website: www.imagella.com
````
