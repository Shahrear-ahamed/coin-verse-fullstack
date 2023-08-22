"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoService = void 0;
const config_1 = __importDefault(require("../../../config"));
const homeCryptos = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`${config_1.default.cryptoSite}?limit=14`, {
        headers: {
            'x-access-token': config_1.default.cryptoToken,
        },
    });
    const result = yield response.json();
    if (result.status !== 'success') {
        throw new Error('Error fetching data');
    }
    return result.data.coins;
});
const coins = ({ limit, page }) => __awaiter(void 0, void 0, void 0, function* () {
    const dataLimit = Number(limit) || 25;
    const dataPage = Number(page) || 1;
    const skip = (dataPage - 1) * dataLimit;
    const response = yield fetch(`${config_1.default.cryptoSite}?limit=${dataLimit}&offset=${skip}`, {
        headers: {
            'x-access-token': config_1.default.cryptoToken,
        },
    });
    const result = yield response.json();
    if (result.status !== 'success') {
        throw new Error('Error fetching data');
    }
    const pages = Math.ceil(result.data.stats.totalCoins / dataLimit);
    const pagination = {
        limit: dataLimit,
        page: dataPage,
        pages,
        nextPage: dataPage < pages,
        previousPage: dataPage > 1,
    };
    return Object.assign({ pagination }, result.data);
});
exports.CryptoService = {
    homeCryptos,
    coins,
};
