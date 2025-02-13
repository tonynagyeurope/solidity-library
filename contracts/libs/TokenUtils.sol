// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
* @title Custom Error Library
* @dev Provides reusable custom errors for Solidity contracts
* @author Tony Nagy
*/
library TokenUtils {
    /// @notice Returns the keccak256 hash based on the token address
    function getTokenHash(address tokenAddress) internal pure returns (bytes32) {
        return keccak256(abi.encodePacked(tokenAddress));
    }

    /// @notice Checks if the token is not a null token
    function isValidToken(address tokenAddress) internal pure returns (bool) {
        return tokenAddress != address(0);
    }

    /// @notice Returns the token balance for a certain address (e.g. ERC20 token)
    function getTokenBalance(address token, address account) internal view returns (uint256) {
        return IERC20(token).balanceOf(account);
    }
}

/// @notice ERC20 interface 
interface IERC20 {
    function transfer(address recipient, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
    function totalSupply() external view returns (uint256);
}
