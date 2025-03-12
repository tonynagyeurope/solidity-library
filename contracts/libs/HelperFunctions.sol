// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title Helper Functions Library
 * @dev Provides reusable helper functions for Solidity contracts
 * @author Tony Nagy
 */
library HelperFunctions {
    /**
     * @notice Decodes custom error revert data.
     * @param data The byte array returned from a revert call.
     * @return errorSelector The first 4 bytes representing the error selector.
     * @return decodedData The remaining bytes containing the custom error parameters.
     */
    function decodeCustomError(bytes memory data) internal pure returns (bytes4 errorSelector, bytes memory decodedData) {
        require(data.length >= 4, "Insufficient data length for decoding");
        // Retrieve the error selector from the first 4 bytes
        assembly {
            errorSelector := mload(add(data, 32))
        }
        // If additional data exists, extract it excluding the error selector
        if (data.length > 4) {
            decodedData = slice(data, 4, data.length - 4);
        }
    }
    
    /**
     * @notice Helper function to slice a byte array.
     * @param data The source byte array.
     * @param start The starting index.
     * @param length The length of the slice.
     * @return result The sliced byte array.
     */
    function slice(bytes memory data, uint256 start, uint256 length) internal pure returns (bytes memory result) {
        require(data.length >= (start + length), "Slice out of bounds");
        result = new bytes(length);
        for (uint256 i = 0; i < length; i++) {
            result[i] = data[start + i];
        }
    }

    /**
     * @notice Helper function to convert uint256 to string.
     * @param _i The source date in uint256 type.
     * @return result The extracted string.
     */
    function uint2str(uint256 _i) internal pure returns (string memory result) {
        if (_i == 0) {
            return "0";
        }
        uint256 j = _i;
        uint256 len;
        while (j != 0) {
            len++;
            j /= 10;
        }
        bytes memory bstr = new bytes(len);
        uint256 k = len;
        while (_i != 0) {
            k = k - 1;
            uint8 temp = uint8(48 + _i % 10);
            bstr[k] = bytes1(temp);
            _i /= 10;
        }
        return string(bstr);
    }    
}