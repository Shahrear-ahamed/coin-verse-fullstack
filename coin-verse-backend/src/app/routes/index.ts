import express from 'express'
import { AdminRoutes } from '../modules/admin/admin.routes'
import { AuthRoutes } from '../modules/auth/auth.route'
import { CryptoRouters } from '../modules/cryptoCurrency/crypto.router'
import { UserRoutes } from '../modules/user/user.route'
import { WalletRoutes } from '../modules/wallet/wallet.route'

const router = express.Router()

const routes = [
  {
    path: '/user',
    route: UserRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/admin',
    route: AdminRoutes,
  },
  {
    path: '/crypto',
    route: CryptoRouters,
  },
  {
    path: '/wallet',
    route: WalletRoutes,
  },
]

routes.forEach(route => {
  router.use(route.path, route.route)
})

export default router
