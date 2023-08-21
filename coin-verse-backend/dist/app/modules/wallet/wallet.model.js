"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    balance: {
        type: Number,
        default: 20,
    },
    walletName: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
}, {
    timestamps: true,
    versionKey: false,
});
const Wallet = (0, mongoose_1.model)('Wallet', userSchema);
exports.default = Wallet;
