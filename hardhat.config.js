require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });

const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;

const BINANCE_PRIVATE_KEY = process.env.BINANCE_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.10",
  networks: {
    rinkeby: {
      url: ALCHEMY_API_KEY_URL,
      accounts: [BINANCE_PRIVATE_KEY],
    },
  },
};
