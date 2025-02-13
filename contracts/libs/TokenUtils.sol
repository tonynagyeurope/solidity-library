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

    /// @notice Helper function to check if an address is a contract (e.g. used by the ERC-777 functions)
    function isContract(address account) private view returns (bool) {
        return account.code.length > 0;
    }    
}

/// @notice ERC-20 interface 
interface IERC20 {
    function transfer(address recipient, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
    function totalSupply() external view returns (uint256);
}
/// @notice ERC-1363 interface
interface IERC1363 is IERC20 {
    function transferAndCall(address to, uint256 value) external returns (bool);
    function transferFromAndCall(address from, address to, uint256 value) external returns (bool);
}
/// @notice ERC-777 interface
interface IERC777 {
    function send(address recipient, uint256 amount, bytes calldata data) external;
    function balanceOf(address owner) external view returns (uint256);
}

/// @notice Minimal recipient interface for ERC-777 hooks
interface IERC777Recipient {
    function tokensReceived(
        address operator,
        address from,
        address to,
        uint256 amount,
        bytes calldata userData,
        bytes calldata operatorData
    ) external;
}
