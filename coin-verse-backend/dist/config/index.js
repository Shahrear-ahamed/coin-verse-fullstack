"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join(process.cwd(), '.env') });
exports.default = {
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
};
