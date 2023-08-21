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
exports.CryptoController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const crypto_service_1 = require("./crypto.service");
const homeCryptos = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield crypto_service_1.CryptoService.homeCryptos();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        status: true,
        message: 'Crypto currencies retrieved successfully',
        data: result,
    });
}));
const coins = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pagination = {
        limit: req.query.limit,
        page: req.query.page,
    };
    const result = yield crypto_service_1.CryptoService.coins(pagination);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        status: true,
        message: 'Crypto currencies retrieved successfully',
        data: result,
    });
}));
exports.CryptoController = {
    homeCryptos,
    coins,
};
