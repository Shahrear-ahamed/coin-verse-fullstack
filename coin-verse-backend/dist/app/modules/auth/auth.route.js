"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = __importDefault(require("express"));
const users_1 = require("../../../enums/users");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const auth_controller_1 = require("./auth.controller");
const auth_validation_1 = require("./auth.validation");
const router = express_1.default.Router();
// create user
router.post('/signup', (0, validateRequest_1.default)(auth_validation_1.AuthValidation.authSignUpZodSchema), auth_controller_1.AuthController.authSignUp);
// login user
router.post('/login', (0, validateRequest_1.default)(auth_validation_1.AuthValidation.authLoginZodSchema), auth_controller_1.AuthController.authLogin);
// logout user
router.post('/logout', (0, auth_1.default)(users_1.USER_ENUM.USER, users_1.USER_ENUM.ADMIN, users_1.USER_ENUM.SUPER_ADMIN), (0, validateRequest_1.default)(auth_validation_1.AuthValidation.refreshTokenZodSchema), auth_controller_1.AuthController.logOut);
// refresh token
router.post('/refresh-token', (0, validateRequest_1.default)(auth_validation_1.AuthValidation.refreshTokenZodSchema), auth_controller_1.AuthController.authRefreshToken);
// change password
router.post('/change-password', (0, auth_1.default)(users_1.USER_ENUM.USER, users_1.USER_ENUM.ADMIN, users_1.USER_ENUM.SUPER_ADMIN), (0, validateRequest_1.default)(auth_validation_1.AuthValidation.changePasswordZodSchema), auth_controller_1.AuthController.authChangePassword);
// close modal
router.post('/close-modal', (0, auth_1.default)(users_1.USER_ENUM.USER, users_1.USER_ENUM.ADMIN, users_1.USER_ENUM.SUPER_ADMIN), auth_controller_1.AuthController.closeModal);
// current user
router.get('/current-user', (0, auth_1.default)(users_1.USER_ENUM.USER, users_1.USER_ENUM.ADMIN, users_1.USER_ENUM.SUPER_ADMIN), (0, validateRequest_1.default)(auth_validation_1.AuthValidation.refreshTokenZodSchema), auth_controller_1.AuthController.currentUser);
exports.AuthRoutes = router;
