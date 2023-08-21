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
exports.AuthService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const mongoose_1 = __importDefault(require("mongoose"));
const uuid_1 = require("uuid");
const config_1 = __importDefault(require("../../../config"));
const ApiErrors_1 = __importDefault(require("../../../errors/ApiErrors"));
const JwtHelpers_1 = require("../../../helpers/JwtHelpers");
const user_model_1 = __importDefault(require("../user/user.model"));
const wallet_model_1 = __importDefault(require("../wallet/wallet.model"));
const auth_model_1 = __importDefault(require("./auth.model"));
const authSignUp = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    let userReturn;
    // create unique id
    const userId = (0, uuid_1.v4)();
    // create session
    const session = yield mongoose_1.default.startSession();
    try {
        // start transaction
        session.startTransaction();
        // create a wallet if fail throw error
        const wallet = yield wallet_model_1.default.create([{ userId }], { session });
        if (!wallet.length) {
            throw new ApiErrors_1.default(http_status_1.default.BAD_REQUEST, 'Fail to create wallet', '');
        }
        // set wallet id into user
        const userPayload = Object.assign(Object.assign({}, payload), { userId, wallet: wallet[0]._id });
        // create a auth if fail throw error
        const newAuth = yield auth_model_1.default.create([userPayload], { session });
        if (!newAuth.length) {
            throw new ApiErrors_1.default(http_status_1.default.BAD_REQUEST, 'Fail to create user', '');
        }
        // set user id into user, create user and throw error
        const preUserDetails = {
            userId,
            email: payload === null || payload === void 0 ? void 0 : payload.email,
            wallet: wallet[0]._id,
        };
        const newUser = yield user_model_1.default.create([preUserDetails], { session });
        if (!newUser.length) {
            throw new ApiErrors_1.default(http_status_1.default.BAD_REQUEST, 'Fail to create user', '');
        }
        // get auth and user
        const auth = newAuth[0];
        const user = newUser[0];
        const userDetails = {
            userId: user.userId,
            role: auth.role,
        };
        const accessToken = yield JwtHelpers_1.JwtHelpers.createToken(userDetails, config_1.default.jwt_secret, config_1.default.jwt_expired);
        const refreshToken = yield JwtHelpers_1.JwtHelpers.createToken(userDetails, config_1.default.jwt_refresh_secret, config_1.default.jwt_refresh_expired);
        const result = Object.assign(Object.assign({}, user.toObject()), { role: auth.role });
        userReturn = Object.assign(Object.assign({}, result), { accessToken, refreshToken });
        // commit transaction and end transaction
        yield session.commitTransaction();
        yield session.endSession();
    }
    catch (error) {
        yield session.abortTransaction();
        yield session.endSession();
        throw error;
    }
    return userReturn;
});
const authLogin = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = payload;
    // check user exist
    const isUserExist = yield auth_model_1.default.isUserExist(email);
    const user = yield user_model_1.default.findOne({ email });
    if (!isUserExist && user) {
        throw new ApiErrors_1.default(http_status_1.default.NOT_FOUND, 'User not found', '');
    }
    // check password match
    const passMatch = yield auth_model_1.default.matchPassword(password, isUserExist.password);
    if (!passMatch) {
        throw new ApiErrors_1.default(http_status_1.default.UNAUTHORIZED, 'Email and Password are wrong', '');
    }
    const userDetails = {
        userId: isUserExist.userId,
        role: isUserExist.role,
    };
    const accessToken = yield JwtHelpers_1.JwtHelpers.createToken(userDetails, config_1.default.jwt_secret, config_1.default.jwt_expired);
    const refreshToken = yield JwtHelpers_1.JwtHelpers.createToken(userDetails, config_1.default.jwt_refresh_secret, config_1.default.jwt_refresh_expired);
    const result = Object.assign(Object.assign({}, user === null || user === void 0 ? void 0 : user.toObject()), { userId: isUserExist.userId });
    return Object.assign(Object.assign({}, result), { accessToken,
        refreshToken });
});
const authRefreshToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    // verify token
    let verifiedToken = null;
    try {
        verifiedToken = JwtHelpers_1.JwtHelpers.verifyToken(token, config_1.default.jwt_refresh_secret);
    }
    catch (error) {
        throw new ApiErrors_1.default(http_status_1.default.FORBIDDEN, 'Invalid Refresh Token', '');
    }
    const { userId } = verifiedToken;
    const isUserExist = yield auth_model_1.default.isUserExistById(userId);
    if (!isUserExist) {
        throw new ApiErrors_1.default(http_status_1.default.NOT_FOUND, 'User not found', '');
    }
    // get user details
    const userDetails = {
        userId: isUserExist.userId,
        role: isUserExist.role,
    };
    // create new access token and refresh token
    const accessToken = yield JwtHelpers_1.JwtHelpers.createToken(userDetails, config_1.default.jwt_secret, config_1.default.jwt_expired);
    const newRefreshToken = yield JwtHelpers_1.JwtHelpers.createToken(userDetails, config_1.default.jwt_refresh_secret, config_1.default.jwt_refresh_expired);
    return {
        userId: isUserExist.userId,
        accessToken,
        refreshToken: newRefreshToken,
    };
});
const authChangePassword = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, oldPassword, newPassword } = payload;
    // check user exist
    const isUserExist = yield auth_model_1.default.isUserExistById(userId);
    if (!isUserExist) {
        throw new ApiErrors_1.default(http_status_1.default.NOT_FOUND, 'User not found', '');
    }
    // check password match
    const passMatch = yield auth_model_1.default.matchPassword(oldPassword, isUserExist.password);
    if (!passMatch) {
        throw new ApiErrors_1.default(http_status_1.default.UNAUTHORIZED, 'Current password is wrong', '');
    }
    // update password
    const checkPasswordChangeCapability = yield auth_model_1.default.updatePassword(userId);
    if (!checkPasswordChangeCapability) {
        throw new ApiErrors_1.default(http_status_1.default.BAD_REQUEST, "You can't change password", '');
    }
    const changePassword = yield auth_model_1.default.findOneAndUpdate({ userId }, { password: newPassword }, { new: true }).select('-password -createdAt -updatedAt  -_id');
    if (!changePassword) {
        throw new ApiErrors_1.default(http_status_1.default.BAD_REQUEST, 'Fail to change password', '');
    }
    return changePassword;
});
const currentUser = (tokenUser) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = tokenUser;
    const auth = yield auth_model_1.default.findOne({ userId });
    const user = yield user_model_1.default.findOne({ userId });
    const wallet = yield wallet_model_1.default.findOne({ userId }, { _id: 0, userId: 0, createdAt: 0, updatedAt: 0 });
    if (!auth && !user) {
        throw new ApiErrors_1.default(http_status_1.default.NOT_FOUND, 'User not found', '');
    }
    return Object.assign(Object.assign(Object.assign({}, user === null || user === void 0 ? void 0 : user.toObject()), wallet === null || wallet === void 0 ? void 0 : wallet.toObject()), { role: auth === null || auth === void 0 ? void 0 : auth.role, showSignUpBonus: auth === null || auth === void 0 ? void 0 : auth.showSignUpBonus });
});
const closeModal = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const auth = yield auth_model_1.default.findOneAndUpdate({
        userId,
    }, {
        showSignUpBonus: false,
    }, { new: true });
    if (!auth) {
        throw new ApiErrors_1.default(http_status_1.default.NOT_FOUND, 'User not found', '');
    }
    return auth;
});
exports.AuthService = {
    authSignUp,
    authLogin,
    authRefreshToken,
    authChangePassword,
    currentUser,
    closeModal,
};
