"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
    },
    contactNo: {
        type: String,
    },
    dateOfBirth: {
        type: Date,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    wallet: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Wallet',
        required: true,
        unique: true,
    },
}, {
    timestamps: true,
    versionKey: false,
});
const User = (0, mongoose_1.model)('User', userSchema);
exports.default = User;
