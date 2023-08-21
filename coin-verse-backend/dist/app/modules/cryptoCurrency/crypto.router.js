"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoRouters = void 0;
const express_1 = __importDefault(require("express"));
const crypto_controller_1 = require("./crypto.controller");
const router = express_1.default.Router();
// get home page cryptos
router.get('/home', crypto_controller_1.CryptoController.homeCryptos);
// get all cryptos
router.get('/crypto-coins', crypto_controller_1.CryptoController.coins);
exports.CryptoRouters = router;
