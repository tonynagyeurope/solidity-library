// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/// @title Test contract for the String Utilities Library
/// @dev Tests the string functions from the StringUtils library
/// @author Tony Nagy

import {StringUtils} from '../libs/StringUtils.sol';

contract TestContractStringUtils {
  using StringUtils for string;

  /// @dev Tests the "concatenate" method
  function concatenation(
    string calldata a,
    string calldata b
  ) public pure returns (string memory) {
    return StringUtils.concatenate(a, b);
  }

  /// @dev Tests the "equals" method
  function equals(
    string calldata a,
    string calldata b
  ) public pure returns (bool) {
    return StringUtils.equals(a, b);
  }

  /// @dev Tests the "contains" method
  function contains(
    string calldata a,
    string calldata b
  ) public pure returns (bool) {
    return StringUtils.contains(a, b);
  }  

  /// @dev Tests the "substring" method
  function substring(
    string calldata a,
    uint256 from,
    uint256 to
  ) public pure returns (string memory) {
    return StringUtils.substring(a, from, to);
  }    
}
