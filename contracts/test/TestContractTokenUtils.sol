// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/// @title Test contract for the Token Utilities Library
/// @dev Tests the string functions from the TokenUtils library
/// @author Tony Nagy

import {TokenUtils} from '../libs/TokenUtils.sol';

contract TestContractTokenUtils {
  using TokenUtils for *;

  /// @dev Tests the "isValidToken" method
  function isValidToken(address tokenAddress) public pure returns (bool) {
    return TokenUtils.isValidToken(tokenAddress);
  }
}
