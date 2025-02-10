// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/// @title String Utilities Library
/// @dev Provides string manipulation functions for Solidity contracts.
/// @author Tony Nagy

library StringUtils {

    /**
    * @notice This function allows concatenation of two strings, using calldata params to optimize gas cost
    * @dev IMPORTANT: The library functions should be internal, otherwise Hadhat cannot link them in
    * @return The concatenated string
    */
    function concatenate(string calldata string1, string calldata string2) internal pure returns (string memory) {
        return string(abi.encodePacked(string1, string2));
    }

    /**
     * @notice Converts a bytes32 value into a human-readable string.
     * @dev This function iterates through the bytes32 array to determine the actual string length
     *      (ignoring trailing null bytes). It creates a new bytes array and copies the characters 
     *      from the input.
     * @param _bytes32 The bytes32 value to convert into a string.
     * @return A string representation of the input bytes32 value.
     */
    function bytes32ToString(bytes32 _bytes32) public pure returns (string memory) {
        uint8 i = 0;
        while (i < 32 && _bytes32[i] != 0) {
            i++;
        }
        bytes memory bytesArray = new bytes(i);
        for (i = 0; i < 32 && _bytes32[i] != 0; i++) {
            bytesArray[i] = _bytes32[i];
        }
        return string(bytesArray);
}


}