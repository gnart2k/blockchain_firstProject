const TrangToken = artifacts.require("./TrangToken.sol");

module.exports = function (deployer) {
  deployer.deploy(TrangToken);
};
