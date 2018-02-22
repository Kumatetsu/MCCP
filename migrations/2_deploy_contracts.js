var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");
var TokenBTU = artifacts.require("./TokenBTU.sol");
var ResContract = artifacts.require("./ResContract.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin, TokenBTU, ResContract);
  deployer.deploy(MetaCoin);
  deployer.deploy(ResContract);
  deployer.deploy(TokenBTU, 12000000000000000000, "TokenBTU", "BTU");
};
