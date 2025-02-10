// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/// @title Custom Error Library
/// @dev Provides reusable custom errors for Solidity contracts
/// @author Tony Nagy
library CustomErrors {
    /// @notice Unauthorized access attempt
    error ErrorUnauthorized();

    /// @notice Insufficient balance for the transaction
    error ErrorInsufficientBalance(uint256 available, uint256 required);
    
    /// @notice Invalid address provided
    error ErrorInvalidAddress(address provided);

    /// @notice Contract is currently paused
    error ErrorContractPaused();

    /// @notice Transaction has already been executed
    error ErrorAlreadyExecuted(uint256 timestamp);
    
    /// @notice Function called with an invalid parameter
    error ErrorInvalidParameter(string param, bytes32 value);

    /// @notice This token is not accepted
    error ErrorTokenNotAccepted(address token);
}
