pragma solidity =0.6.6;
import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract TestTwo is ERC20 {
    address public owner;
    uint public total;
    constructor() ERC20('TestTwo', 'TWO') public {
        owner = msg.sender;
        total = 100000e18;
    }
    function mint(address to, uint amount) public {
        _mint(to, amount);
    }
}