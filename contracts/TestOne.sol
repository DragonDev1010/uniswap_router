pragma solidity =0.6.6;
import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract TestOne is ERC20 {
    address public owner;
    uint public total;
    constructor() ERC20('TestOne', 'ONE') public {
        owner = msg.sender;
        total = 100000e18;
    }
    function mint(address to, uint amount) public {
        _mint(to, amount);
    }
}