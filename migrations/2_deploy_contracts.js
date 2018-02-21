var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");
var TokenBTU = artifacts.require("./TokenBTU.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin, TokenBTU);
  deployer.deploy(MetaCoin);
  deployer.deploy(TokenBTU, 12000, "TokenBTU", "BTU");
};
