// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import './CustomErrors.sol';

/// @title Modifiers Library
/// @notice Provides common modifier-like functions using structured custom errors
/// @dev This library enhances modularity and reusability across contracts.
/// @author Tony Nagy
library Modifiers {
  using CustomErrors for *;

  /// @notice Ensures that only the contract owner can execute the function
  /// @param owner The address of the contract owner
  /// @param sender The address of the function caller
  function onlyOwner(address owner, address sender) internal pure {
    if (sender != owner) {
      revert CustomErrors.ErrorUnauthorized();
    }
  }

  /// @notice Ensures that the sender has sufficient balance
  /// @param balance The available balance of the sender
  /// @param required The required balance for the transaction
  function hasEnoughBalance(uint256 balance, uint256 required) internal pure {
    if (balance < required) {
      revert CustomErrors.ErrorInsufficientBalance(balance, required);
    }
  }

  /// @notice Ensures that the provided address is valid (not zero address)
  /// @param provided The address to check
  function validAddress(address provided) internal pure {
    if (provided == address(0)) {
      revert CustomErrors.ErrorInvalidAddress(provided);
    }
  }

  /// @notice Ensures that the contract is not paused
  /// @param paused The boolean flag indicating the contract pause state
  function notPaused(bool paused) internal pure {
    if (paused) {
      revert CustomErrors.ErrorContractPaused();
    }
  }

  /// @notice Ensures a function is not executed multiple times
  /// @param executed Whether the transaction has already been executed
  /// @param timestamp The timestamp of the original execution
  function notExecuted(bool executed, uint256 timestamp) internal pure {
    if (executed) {
      revert CustomErrors.ErrorAlreadyExecuted(timestamp);
    }
  }
}
