// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract KlusterMiniVault is ERC20 {
    address public immutable STAKE_TOKEN;

    event Deposited(address indexed from, uint256 amount);

    constructor(address _kavaErc20)
        ERC20("Kluster Stub kKAVA", "kKAVA")
    {
        STAKE_TOKEN = _kavaErc20;
    }

    function deposit(uint256 assets) external {
        require(assets > 0, "zero");
        bool success = ERC20(STAKE_TOKEN).transferFrom(msg.sender, address(this), assets);
        require(success, "transferFrom failed");
        _mint(msg.sender, assets);
        emit Deposited(msg.sender, assets); // ✅ Moved inside the function
    }

    function withdraw(uint256 shares) external {
        _burn(msg.sender, shares);
        ERC20(STAKE_TOKEN).transfer(msg.sender, shares);
    }
}