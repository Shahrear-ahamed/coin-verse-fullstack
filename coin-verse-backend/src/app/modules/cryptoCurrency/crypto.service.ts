import config from '../../../config'

type Crypto = {
  status: string
  data: {
    stats: {
      total: number
      totalCoins: number
    }
    coins: object[]
  }
}

const homeCryptos = async () => {
  type Crypto = {
    status: string
    data: {
      stats: object
      coins: object[]
    }
  }

  const response = await fetch(`${config.cryptoSite}?limit=14`, {
    headers: {
      'x-access-token': config.cryptoToken!,
    },
  })
  const result: Crypto = await response.json()

  if (result.status !== 'success') {
    throw new Error('Error fetching data')
  }

  return result.data.coins
}

const coins = async ({ limit, page }: { limit: string; page: string }) => {
  const dataLimit = Number(limit) || 25
  const dataPage = Number(page) || 1
  const skip = (dataPage - 1) * dataLimit

  const response = await fetch(
    `${config.cryptoSite}?limit=${dataLimit}&offset=${skip}`,
    {
      headers: {
        'x-access-token': config.cryptoToken!,
      },
    },
  )
  const result: Crypto = await response.json()

  if (result.status !== 'success') {
    throw new Error('Error fetching data')
  }

  const pages = Math.ceil(result.data.stats.totalCoins / dataLimit)

  const pagination = {
    limit: dataLimit,
    page: dataPage,
    pages,
    nextPage: dataPage < pages,
    previousPage: dataPage > 1,
  }

  return { pagination, ...result.data }
}

export const CryptoService = {
  homeCryptos,
  coins,
}
