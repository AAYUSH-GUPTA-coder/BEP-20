// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AayushToken is ERC20, ERC20Burnable, Pausable, Ownable {
    // Set initial Supply
    constructor(uint256 initialSupply) ERC20("BEP20", "BP") {
        _mint(msg.sender, initialSupply * 10**decimals());
    }

    // Burn Token holders will be able to destroy their tokens.

    // Privileged accounts will be able to create more supply.
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    // Privileged accounts will be able to pause the functionality marked as whenNotPaused. Useful for emergency response.
    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal override whenNotPaused {
        super._beforeTokenTransfer(from, to, amount);
    }
}
