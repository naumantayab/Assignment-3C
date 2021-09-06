const MNT = artifacts.require("MNT");

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(MNT);
};
