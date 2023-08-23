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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const config_1 = __importDefault(require("../../../config"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const auth_service_1 = require("./auth.service");
const authSignUp = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    const _a = yield auth_service_1.AuthService.authSignUp(userData), { refreshToken, accessToken } = _a, result = __rest(_a, ["refreshToken", "accessToken"]);
    res.cookie('token', accessToken, {
        httpOnly: true,
        secure: config_1.default.env === 'production',
        expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
        // sameSite: 'none',
    });
    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: config_1.default.env === 'production',
        expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
        // sameSite: 'none',
    });
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        status: true,
        message: 'User created successfully',
        data: result,
    });
}));
const authLogin = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    const _b = yield auth_service_1.AuthService.authLogin(userData), { refreshToken, accessToken } = _b, result = __rest(_b, ["refreshToken", "accessToken"]);
    res.cookie('token', accessToken, {
        httpOnly: true,
        secure: config_1.default.env === 'production',
        expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
        // sameSite: 'none',
    });
    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: config_1.default.env === 'production',
        expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
        // sameSite: 'none',
    });
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        status: true,
        message: 'User logged in successfully',
        data: result,
    });
}));
const authRefreshToken = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { refreshToken } = req.cookies;
    const _c = yield auth_service_1.AuthService.authRefreshToken(refreshToken), { refreshToken: newRefreshToken } = _c, result = __rest(_c, ["refreshToken"]);
    const cookieOptions = {
        httpOnly: true,
        secure: config_1.default.env === 'production',
        expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
    };
    res.cookie('refreshToken', newRefreshToken, cookieOptions);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        status: true,
        message: 'Token refreshed successfully',
        data: result,
    });
}));
const authChangePassword = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _d;
    const userId = (_d = req.user) === null || _d === void 0 ? void 0 : _d.userId;
    const { oldPassword, newPassword } = req.body;
    const result = yield auth_service_1.AuthService.authChangePassword({
        userId,
        oldPassword,
        newPassword,
    });
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        status: true,
        message: 'Password changed successfully',
        data: result,
    });
}));
const currentUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    const result = yield auth_service_1.AuthService.currentUser(user);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        status: true,
        message: 'Current user retrieved successfully',
        data: result,
    });
}));
const logOut = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = null;
    const cookieOptions = {
        httpOnly: true,
        secure: config_1.default.env === 'production',
        expires: new Date(0),
    };
    res.cookie('refreshToken', '', cookieOptions);
    res.cookie('token', '', cookieOptions);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        status: true,
        message: 'User logged out successfully',
        data: result,
    });
}));
const closeModal = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _e;
    const result = yield auth_service_1.AuthService.closeModal((_e = req === null || req === void 0 ? void 0 : req.user) === null || _e === void 0 ? void 0 : _e.userId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        status: true,
        message: 'Modal closed successfully',
        data: result,
    });
}));
exports.AuthController = {
    authSignUp,
    authLogin,
    authRefreshToken,
    authChangePassword,
    currentUser,
    logOut,
    closeModal,
};
