"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRoutes = void 0;
const express_1 = __importDefault(require("express"));
const users_1 = require("../../../enums/users");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const admin_controller_1 = require("./admin.controller");
const router = express_1.default.Router();
router.get('/all-users', (0, auth_1.default)(users_1.USER_ENUM.ADMIN, users_1.USER_ENUM.SUPER_ADMIN), admin_controller_1.AdminController.getAllUser);
exports.AdminRoutes = router;
