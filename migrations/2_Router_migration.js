const UniswapV2Router02 = artifacts.require("UniswapV2Router02");
const One = artifacts.require('TestOne')
const Two = artifacts.require('TestTwo')
const factory_address = '0xf7832C86aACD156d0051e3E25e260c69ce2d33eA'
const weth_address = '0xc778417e063141139fce010982780140aa0cd5ab'

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(UniswapV2Router02, factory_address, weth_address);
  await deployer.deploy(One)
  await deployer.deploy(Two)
};
