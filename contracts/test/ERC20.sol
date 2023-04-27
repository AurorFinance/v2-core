pragma solidity =0.5.16;

import '../AurorV2ERC20.sol';

contract ERC20 is AurorV2ERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
