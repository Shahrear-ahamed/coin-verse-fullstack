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
const http_status_1 = __importDefault(require("http-status"));
const config_1 = __importDefault(require("../../config"));
const ApiErrors_1 = __importDefault(require("../../errors/ApiErrors"));
const JwtHelpers_1 = require("../../helpers/JwtHelpers");
const auth = (...roles) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // get a token and check it
        const token = yield req.cookies.token;
        if (!token) {
            throw new ApiErrors_1.default(http_status_1.default.UNAUTHORIZED, 'You are not authorize', '');
        }
        // verify user token
        const verifyToken = JwtHelpers_1.JwtHelpers.verifyToken(token, config_1.default.jwt_secret);
        if (!verifyToken) {
            throw new ApiErrors_1.default(http_status_1.default.UNAUTHORIZED, 'You are not verified for this route', '');
        }
        // after verification user are auth for this route?
        if (!roles.includes(verifyToken === null || verifyToken === void 0 ? void 0 : verifyToken.role)) {
            throw new ApiErrors_1.default(http_status_1.default.FORBIDDEN, 'Forbidden', '');
        }
        req.user = verifyToken;
        next();
    }
    catch (error) {
        next(error);
    }
});
exports.default = auth;
