import express from 'express'
import { USER_ENUM } from '../../../enums/users'
import auth from '../../middlewares/auth'
import validateRequest from '../../middlewares/validateRequest'
import { WalletController } from './wallet.controller'
import { WalletValidation } from './wallet.validation'

const router = express.Router()

router.post(
  '/add-wallet',
  auth(USER_ENUM.USER, USER_ENUM.ADMIN, USER_ENUM.SUPER_ADMIN),
  validateRequest(WalletValidation.addWalletZSchema),
  WalletController.addWallet,
)

export const WalletRoutes = router
