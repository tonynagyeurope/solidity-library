// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/// @title String Utilities Library
/// @dev Provides string manipulation functions for Solidity contracts.
/// @author Tony Nagy

library StringUtils {

    /// @notice This function allows concatenation of two strings, using calldata params to optimize gas cost
    /// @dev IMPORTANT: The library functions should be internal, otherwise Hadhat cannot link them in
    function concatenate(string calldata string1, string calldata string2) internal pure returns (string memory) {
        return string(abi.encodePacked(string1, string2));
    }

}