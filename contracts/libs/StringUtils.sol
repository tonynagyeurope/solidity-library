// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title Solidity String Utilities Library
 * @dev Provides string manipulation functions for Solidity contracts.
 * @author Tony Nagy
 */
library StringUtils {
  /**
   * @notice This function allows concatenation of two strings, using calldata params to optimize gas cost
   * @dev IMPORTANT: The library functions should be internal, otherwise Hadhat cannot link them in
   * @return The concatenated string
   */
  function concatenate(
    string calldata string1,
    string calldata string2
  ) internal pure returns (string memory) {
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
  function bytes32ToString(
    bytes32 _bytes32
  ) public pure returns (string memory) {
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

  /**
   * @notice Calculates the length of a given string.
   * @param str The input string.
   * @return The length of the string in characters.
   */
  function length(string memory str) internal pure returns (uint256) {
    return bytes(str).length;
  }

  /**
   * @notice Compares two strings for equality.
   * @param str1 The first string.
   * @param str2 The second string.
   * @return True if the strings are equal, false otherwise.
   */
  function equals(
    string memory str1,
    string memory str2
  ) internal pure returns (bool) {
    return
      keccak256(abi.encodePacked(str1)) == keccak256(abi.encodePacked(str2));
  }

  /**
   * @notice Checks if a string contains a given substring.
   * @param str The main string.
   * @param substr The substring to check for.
   * @return True if the substring is found, false otherwise.
   */
  function contains(
    string memory str,
    string memory substr
  ) internal pure returns (bool) {
    bytes memory strBytes = bytes(str);
    bytes memory subBytes = bytes(substr);

    if (subBytes.length > strBytes.length) {
      return false;
    }

    for (uint256 i = 0; i <= strBytes.length - subBytes.length; i++) {
      bool found = true;
      for (uint256 j = 0; j < subBytes.length; j++) {
        if (strBytes[i + j] != subBytes[j]) {
          found = false;
          break;
        }
      }
      if (found) {
        return true;
      }
    }
    return false;
  }

  /**
   * @notice Extracts a substring from a given string.
   * @param str The main string.
   * @param startIndex The starting index (inclusive).
   * @param endIndex The ending index (exclusive).
   * @return The extracted substring.
   */
  function substring(
    string memory str,
    uint256 startIndex,
    uint256 endIndex
  ) internal pure returns (string memory) {
    require(endIndex > startIndex, 'Invalid indexes');
    bytes memory strBytes = bytes(str);
    require(endIndex <= strBytes.length, 'End index out of bounds');

    bytes memory result = new bytes(endIndex - startIndex);
    for (uint256 i = startIndex; i < endIndex; i++) {
      result[i - startIndex] = strBytes[i];
    }
    return string(result);
  }

  /**
   * @notice Removes leading and trailing whitespaces from a string.
   * @param str The input string.
   * @return The trimmed string.
   */
  function trim(string memory str) internal pure returns (string memory) {
    bytes memory strBytes = bytes(str);
    uint256 start = 0;
    uint256 end = strBytes.length;

    // Trim leading spaces
    while (start < end && strBytes[start] == 0x20) {
      start++;
    }

    // Trim trailing spaces
    while (end > start && strBytes[end - 1] == 0x20) {
      end--;
    }

    return substring(str, start, end);
  }
}
