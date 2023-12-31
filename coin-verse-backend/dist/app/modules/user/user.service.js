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
exports.UserService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiErrors_1 = __importDefault(require("../../../errors/ApiErrors"));
const auth_service_1 = require("../auth/auth.service");
const user_model_1 = __importDefault(require("./user.model"));
const getMyProfile = (payload) => {
    return user_model_1.default.findOne({ userId: payload }, { _id: 0, balance: 0 });
};
const updateMyProfile = (userId, body) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.default.findOneAndUpdate({ userId }, body, { new: true });
    if (!result) {
        throw new ApiErrors_1.default(http_status_1.default.NOT_FOUND, 'User not found', '');
    }
    return yield auth_service_1.AuthService.currentUser({ userId });
});
exports.UserService = {
    getMyProfile,
    updateMyProfile,
};
