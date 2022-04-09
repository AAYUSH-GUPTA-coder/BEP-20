const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
require("@nomiclabs/hardhat-etherscan");

async function main() {
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so bep20Contract here is a factory for instances of our Verify contract.
  */
  const bep20Contract = await ethers.getContractFactory("BEP-20");

  // deploy the contract
  const deployedbep20Contract = await bep20Contract.deploy(100);

  await deployedbep20Contract.deployed();

  // print the address of the deployed contract
  console.log("Verify Contract Address:", deployedbep20Contract.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
