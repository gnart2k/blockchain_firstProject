const TrangCoin = artifacts.require("./TrangToken.sol");

contract("TrangCoin", function (accounts) {
  it("should put 1000 TrangCoin in the first account", async function () {
    const trangCoin = await TrangCoin.deployed();
    const balance = await trangCoin.totalSupply();
    assert.equal(balance.toNumber(), 10000, "ok");
  });
});
