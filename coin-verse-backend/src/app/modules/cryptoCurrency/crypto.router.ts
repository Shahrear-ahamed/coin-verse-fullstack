import express from 'express'
import { CryptoController } from './crypto.controller'

const router = express.Router()

// get home page cryptos
router.get('/home', CryptoController.homeCryptos)

export const CryptoRouters = router
