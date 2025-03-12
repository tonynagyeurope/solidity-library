// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
    @title Test contracts for the HelperFunctions Library
    @dev The test contracts below are references of using the HelperFunctions library
    @author Tony Nagy
*/

import '../libs/HelperFunctions.sol';

/// @notice Custom error definition.
error CustomError(uint256 code, string message);

/// @dev This is just a helper contract inside for testing custom error handling
<<<<<<< HEAD
contract ExternalContract {    
    // This is the test error code that we would like extract from the bytes data with our library at the end
    uint256 constant SAMPLE_ERROR_CODE = 100;
    // A function that throws a custom error if the value is zero.
    function doSomething(uint256 value) external pure returns (uint256) {
        if (value == 0) {
            revert CustomError(SAMPLE_ERROR_CODE, "Value must be non-zero");
        }
        return value * 2;
=======
contract ExternalContract {
  uint256 constant SAMPLE_ERROR_CODE = 100;
  // A function that throws a custom error if the value is zero.
  function doSomething(uint256 value) external pure returns (uint256) {
    if (value == 0) {
      revert CustomError(SAMPLE_ERROR_CODE, 'Value must be non-zero');
>>>>>>> 6d8e5be4ed4ae23124dda3496f05c243a6a4e2a3
    }
    return value * 2;
  }

  function getSampleErrorCodeStr() external pure returns (string memory) {
    return HelperFunctions.uint2str(SAMPLE_ERROR_CODE);
  }
}

/// @notice This is the test contract for testing all the internal helper functions from the library
contract TestContractHelperFunctions {
  using HelperFunctions for bytes;

  ExternalContract externalContract;

  /// @notice Passing the address of the ExternalContract in the constructor.
  constructor(address externalContractAddress) {
    externalContract = ExternalContract(externalContractAddress);
  }

  /// @notice Calls the externalContract.doSomething function and catches the potential errors.
  function execute(uint256 value) external view returns (string memory) {
    try externalContract.doSomething(value) returns (uint256) {
      return 'Operation succeeded';
    } catch (bytes memory lowLevelData) {
      bytes4 errorSelector; // The 4 bytes error selector.
      bytes memory params; // The custom error parameters.

      // Decodes revert error data using HelperFunctions here.
      (errorSelector, params) = HelperFunctions.decodeCustomError(lowLevelData);

      // We check here is the error selector matches the CustomError selector.
      if (errorSelector == CustomError.selector) {
        // Encoding data after the error selector.
        (uint256 errorCode, string memory errorMessage) = abi.decode(
          params,
          (uint256, string)
        );
        return
          string(
            abi.encodePacked(
              'Caught CustomError: ',
              errorMessage,
              ' (code ',
              HelperFunctions.uint2str(errorCode),
              ')'
            )
          );
      } else {
        return 'Caught unknown error';
      }
    }
  }
}
