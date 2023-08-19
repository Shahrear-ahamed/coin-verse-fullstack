import express from 'express'
import { CryptoController } from './crypto.controller'

const router = express.Router()

// get home page cryptos
router.get('/home', CryptoController.homeCryptos)

// get all cryptos
router.get('/crypto-coins', CryptoController.coins)

export const CryptoRouters = router
