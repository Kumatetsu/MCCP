var TokenBTU = artifacts.require("./TokenBTU.sol");
var ResContract = artifacts.require("./ResContract.sol");

module.exports = function(deployer) {
  deployer.deploy(TokenBTU, 12000000000000000000, "TokenBTU", "BTU").then(function() {
    return deployer.deploy(ResContract, TokenBTU.address);
  });
};
