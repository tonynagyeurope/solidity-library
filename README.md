# solidity-library
Useful solidity utils for developers by Tony Nagy

# Solidity Library for Crypto Payment Solutions

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## Overview

This project is a Solidity library designed to provide utility functions and helper contracts for a crypto payment solution implemented in another private repository (for www.imagella.com), though it can be used freely in any other projects. The Imagella crypto payment solution is primarily focused on micropayments, offering extremely low transaction fees for low-value transactions (e.g., in the range of $1-$5) while remaining highly cost-effective for larger amounts as well. Additionally, the solution includes a robust fallback mechanism that leverages multiple low-fee networks in case of network congestion or unavailability. The library is continuously developed and documented with NatSpec comments to ensure clear, self-explanatory code.

## Features

- **Utility Contracts:** Provides functions for token management, string operations, and custom error handling.
- **NatSpec Documentation:** Every function and contract includes NatSpec comments for clear documentation.
- **TypeScript Integration:** Supporting scripts for deployment and testing are written in TypeScript.
- **Hardhat Environment:** Uses Hardhat for compiling, testing, and deploying contracts.
- **Cross-Platform Development:** Developed on Linux Ubuntu with a Node.js environment.

