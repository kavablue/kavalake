// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TestWKAVA is ERC20 {
    constructor() ERC20("Wrapped KAVA (Test)", "WKAVA") {
        _mint(msg.sender, 1_000_000 ether);  // Mint 1M test WKAVA to yourself
    }
}