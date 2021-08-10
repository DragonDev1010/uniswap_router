// ganache-cli --fork https://rinkeby.infura.io/v3/b8a10907bdda41c6ac713b5efc0257ee --allowUnlimitedContractSize --unlock "0x453B8D46D3D41d3B3DdC09B20AE53aa1B6aB186E"
require('chai')
    .use(require('chai-as-promised'))
    .should()

const {assert} = require('chai')

const Router = artifacts.require('./UniswapV2Router02.sol')
const One = artifacts.require('./TestOne.sol')
const Two = artifacts.require('./TestTwo.sol')

contract('Router Contract', (accounts) => {
    let router, one, two
    let res
    before(async() => {
        router = await Router.deployed()
        one = await One.deployed()
        two = await Two.deployed()
    })
    // it('Factory contract test', async() => {
        // res = await router.factory()
        // console.log(res)
    // })
    it('factory test', async() => {
        res = await router.test.call(one.address, two.address, {from: '0x453B8D46D3D41d3B3DdC09B20AE53aa1B6aB186E'})
        console.log(res)
    })
    it('add liquidity', async() => {
        console.log(one.address, ' : ', two.address)
        // res = await router.addLiquidity(one.address, two.address, 10, 10, 1000, 1000, accounts[1], 1631228945)
    })
})