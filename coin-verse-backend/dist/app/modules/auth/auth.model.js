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
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const users_1 = require("../../../enums/users");
const authSchema = new mongoose_1.Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: users_1.userRole,
        default: users_1.USER_ENUM.USER,
    },
    wallet: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Wallet',
        required: true,
        unique: true,
    },
    passwordChangedAt: {
        type: Date,
        default: Date.now(),
    },
    showSignUpBonus: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true,
    versionKey: false,
});
// statics are use
authSchema.statics.isUserExist = function (email) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield this.findOne({ email }).select('+password');
    });
};
authSchema.statics.isUserExistById = function (userId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield this.findOne({ userId }).select('+password');
    });
};
authSchema.statics.matchPassword = function (givenPassword, storedPassword) {
    return __awaiter(this, void 0, void 0, function* () {
        return givenPassword === storedPassword;
    });
};
authSchema.statics.updatePassword = function (userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield this.findOne({ userId });
        const userPasswordChangedAt = user === null || user === void 0 ? void 0 : user.passwordChangedAt;
        const currentDate = new Date();
        // Calculate the difference in milliseconds
        const timeDifference = currentDate.getTime() - userPasswordChangedAt.getTime();
        // Convert milliseconds to days
        const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
        return daysDifference < 30;
    });
};
const Auth = (0, mongoose_1.model)('Auth', authSchema);
exports.default = Auth;
