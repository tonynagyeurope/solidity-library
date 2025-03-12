# solidity-library

Useful solidity utils for developers

# Solidity Library for Crypto Payment Solutions

[![CI Status](https://github.com/tonynagyeurope/solidity-library/actions/workflows/setup.yml/badge.svg)](https://github.com/tonynagyeurope/solidity-library/actions)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Overview

This project is a Solidity library designed to provide utility functions and helper contracts for a crypto payment solution implemented in another private repository (for www.imagella.com), though it can be used freely in any other projects. The Imagella crypto payment solution is primarily focused on micropayments, offering extremely low transaction fees for low-value transactions (e.g., in the range of $1-$5) while remaining highly cost-effective for larger amounts as well.

<div align="center">
  <img src="https://github.com/user-attachments/assets/a50e2b69-b292-4296-9b18-9f05cdd8d890" alt="Imagella Crypto Payment Solution">
  <p>
  <figcaption><i>Imagella: Empowering seamless micropayments with blockchain</i></figcaption>
  </p>  
</div>

Additionally, the solution includes a robust fallback mechanism that leverages multiple low-fee networks in case of network congestion or unavailability. The library is continuously developed and documented with NatSpec comments to ensure clear, self-explanatory code.

## Features

- **Utility Contracts:** Provides functions for token management, string operations, and custom error handling.
- **NatSpec Documentation:** Every function and contract includes NatSpec comments for clear documentation.
- **TypeScript Integration:** Supporting scripts for deployment and testing are written in TypeScript.
- **Hardhat Environment:** Uses Hardhat for compiling, testing, and deploying contracts.
- **Cross-Platform Development:** Developed on Linux Ubuntu with a Node.js environment.
- **Automatic Gas Report:** Uses CI (Github Actions) for gas reporting with Hardhat Gas Reporter.
- **Automatic Test Coverage Report:** Uses CI (Github Actions) generating test coverage report.

## Library Structure
```
contracts/
  - CustomErrors.sol       // Custom error definitions with NatSpec
  - Modifiers.sol          // Common modifiers for contracts
  - StringUtils.sol        // Utility functions for string manipulation
  - TokenUtils.sol         // Functions for token management
  - HelperFunctions.sol    // Helper functions such as "decodeCustomError", useful in try/catch blocks

scripts/
  [Deployment and utility scripts in TypeScript]

test/
  [Hardhat tests for the libraries]
    - Installation
    - Compilation test
    - Contract deploy test
    - StringUtils Tests
    - Automated code formatting
    - Automated test coverage report
    - Automated gas usage report
    - Automated artifact (report file) uploads

hardhat.config.ts         // Hardhat configuration file
package.json              // Node.js package file
tsconfig.json             // TypeScript configuration file
README.md                 // This file
```
## Examples

### HelperFunctions example

import "./HelperFunctions.sol";

/// @notice Custom error definition.
error CustomError(uint256 code, string message);

contract Example {
    using HelperFunctions for bytes;

    /// @notice A function that reverts with a custom error if input is zero.
    function doSomething(uint256 x) external pure returns (uint256) {
        if (x == 0) revert CustomError(1, "x cannot be zero");
        return x * 2;
    }

    /// @notice Decodes revert error data using HelperFunctions.
    /// @param errorData The revert data from a failed call.
    /// @return selector The error selector.
    /// @return params The custom error parameters.
    function decodeError(bytes memory errorData) external pure returns (bytes4 selector, bytes memory params) {
        (selector, params) = HelperFunctions.decodeCustomError(errorData);
    }
}

### TokenUtils example

    import { TokenUtils } from "./libs/TokenUtils.sol";
    
    contract MyTokenChecker {
        function checkToken(address token) public pure returns (bool) {
            return TokenUtils.isValidToken(token);
        }
    }

### StringUtils Example

    import { StringUtils } from "./libs/StringUtils.sol";
    
    contract MyContract {
        function getSubstring(string memory str) public pure returns (string memory) {
            return StringUtils.substring(str, 0, 3); // Pl. "Hello" -> "Hel"
        }
    }

## Functional tests and coverage report (03/06/2025)

![kép](https://github.com/user-attachments/assets/d9a021a9-1607-4f21-8769-1641c4922d5b)

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/tonynagyeurope/solidity-library.git
   cd solidity-library

2. **Install dependencies**

    npm install

3. **Configure Environment**

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

## Library Documentation

The contracts include NatSpec comments that describe the purpose, parameters, and return values for each function. You can generate API documentation using tools that parse NatSpec comments or refer directly to the source code.

## Testing

Tests are implemented using Hardhat's testing framework. To run the tests, execute:

    npx hardhat test

## CI/CD and gas report

GitHub Actions for each push and pull request:

  - Runs tests (npx hardhat test).
  - Checks gas costs and uploads gas-report.txt as an artifact (available for download in the Actions tab).

## Contributing

Contributions are welcome! To contribute:
```
    - Fork the repository.
    - Create a new branch for your feature or bug fix.
    - Commit your changes with clear messages.
    - Submit a pull request detailing your changes.
```
Please adhere to the existing coding standards and document your code with NatSpec comments where appropriate.

## License

This project is licensed under the MIT License.

## Contact

For further information or any questions, please contact:
````
    Developer: Tony Nagy
    Email: tony@imagella.com or tony.nagy.europe@gmail.com
    Website: www.imagella.com
````
