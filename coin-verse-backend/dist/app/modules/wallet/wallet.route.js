"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletRoutes = void 0;
const express_1 = __importDefault(require("express"));
const users_1 = require("../../../enums/users");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const wallet_controller_1 = require("./wallet.controller");
const wallet_validation_1 = require("./wallet.validation");
const router = express_1.default.Router();
router.post('/add-wallet', (0, auth_1.default)(users_1.USER_ENUM.USER, users_1.USER_ENUM.ADMIN, users_1.USER_ENUM.SUPER_ADMIN), (0, validateRequest_1.default)(wallet_validation_1.WalletValidation.addWalletZSchema), wallet_controller_1.WalletController.addWallet);
exports.WalletRoutes = router;
