const UniswapV2Router02 = artifacts.require("UniswapV2Router02");

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(UniswapV2Router02, accounts[0], accounts[1]);
  let router = await UniswapV2Router02.deployed()
  console.log(router)
};
