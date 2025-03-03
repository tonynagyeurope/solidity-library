// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/// @title Test contract for the String Utilities Library
/// @dev Tests the string functions from the StringUtils library
/// @author Tony Nagy

import {StringUtils} from '../libs/StringUtils.sol';

contract TestContractStringUtils {
  using StringUtils for string;

  /// @dev Tests the "concatenate" string function
  function testConcatenation(
    string calldata a,
    string calldata b
  ) public pure returns (string memory) {
    return StringUtils.concatenate(a, b);
  }
}
