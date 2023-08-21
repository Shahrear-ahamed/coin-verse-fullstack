"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const users_1 = require("../../../enums/users");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const user_controller_1 = require("./user.controller");
const user_validation_1 = require("./user.validation");
const router = express_1.default.Router();
router.get('/my-profile', (0, auth_1.default)(users_1.USER_ENUM.USER, users_1.USER_ENUM.ADMIN, users_1.USER_ENUM.SUPER_ADMIN), user_controller_1.UserController.getMyProfile);
router.post('/update-profile', (0, auth_1.default)(users_1.USER_ENUM.USER, users_1.USER_ENUM.ADMIN, users_1.USER_ENUM.SUPER_ADMIN), (0, validateRequest_1.default)(user_validation_1.UserValidation.updateProfileZodSchema), user_controller_1.UserController.updateMyProfile);
exports.UserRoutes = router;
