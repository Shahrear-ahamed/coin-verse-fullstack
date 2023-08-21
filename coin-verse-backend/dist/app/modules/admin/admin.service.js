"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const auth_model_1 = __importDefault(require("../auth/auth.model"));
const getAllUsers = () => {
    const users = auth_model_1.default.find({ role: { $eq: 'user' } })
        .populate('wallet', {
        _id: 0,
        userId: 0,
        createdAt: 0,
        updatedAt: 0,
    })
        .select(['-_id', 'password', 'email', 'userId', 'role'])
        .sort({ createdAt: -1 });
    return users;
};
exports.AdminService = {
    getAllUsers,
};
