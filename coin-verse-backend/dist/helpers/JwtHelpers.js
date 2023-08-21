"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtHelpers = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createToken = (payload, secret, expired) => {
    const option = { expiresIn: expired };
    return jsonwebtoken_1.default.sign(payload, secret, option);
};
const verifyToken = (payload, secret) => {
    return jsonwebtoken_1.default.verify(payload, secret);
};
exports.JwtHelpers = { createToken, verifyToken };
