// const fetch = import('node-fetch');

// crypto service is a file that will contain all the business logic for the crypto module

const homeCryptos = async () => {
  type Crypto = {
    status: string
    data: {
      stats: object
      coins: object[]
    }
  }

  const response = await fetch('https://api.coinranking.com/v2/coins?limit=14')
  const result: Crypto = await response.json()

  return result.data.coins
}

export const CryptoService = {
  homeCryptos,
}
