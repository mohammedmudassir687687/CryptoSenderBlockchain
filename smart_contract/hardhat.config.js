// https://eth-goerli.g.alchemy.com/v2/mXAtWojLs6lwXjsQYd9CVZYXVqLOh8BD

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/mXAtWojLs6lwXjsQYd9CVZYXVqLOh8BD',
      accounts: ['9db338999274f663fe17aa9b6c676376b0136077ee96eb5ea839df2ff43d69dd']
    }
  }
}