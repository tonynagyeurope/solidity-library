// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/// @title Test contract for the Modifiers Utilities Library
/// @dev Tests the modifiers from the Modifiers library
/// @author Tony Nagy

/// @dev Import just the library for checker functions.
import '../libs/CheckerFunctions.sol';

contract TestContractCheckerFunctions {

  /// @dev Tests the "onlyOwner" checker method with fake address or real owner.
  function onlyOwnerChecker(address owner) public view {    
      CheckerFunctions.onlyOwner(owner, msg.sender);
  }

}