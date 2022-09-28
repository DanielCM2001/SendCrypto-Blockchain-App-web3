//https://eth-goerli.g.alchemy.com/v2/vBNat31xtw5Bw7P7UFXJQ5zVuHfjjd8Q

require("@nomiclabs/hardhat-waffle")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/vBNat31xtw5Bw7P7UFXJQ5zVuHfjjd8Q',
      accounts: [ '267afdd6df8c37e988dd201a918c709141c0c40dd6badf327a3367f9e82bedf6' ]
    }
  }
};
