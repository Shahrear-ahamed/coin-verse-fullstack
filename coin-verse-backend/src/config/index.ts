import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(process.cwd(), '.env') })

export default {
  env: process.env.ENV,
  port: process.env.PORT,
  local: process.env.CORS_URL_LOCAL,
  live: process.env.CORS_URL_LIVE,
  database_url: process.env.DATABASE_URL,

  cryptoSite: process.env.CRYPTO_API,
  cryptoToken: process.env.CRYPTO_TOKEN,

  jwt_secret: process.env.JWT_SECRET,
  jwt_expired: process.env.JWT_EXPIRES,
  jwt_refresh_secret: process.env.JWT_REFRESH_SECRET,
  jwt_refresh_expired: process.env.JWT_REFRESH_EXPIRES,
}
