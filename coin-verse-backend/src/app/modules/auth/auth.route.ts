import express from 'express'
import { USER_ENUM } from '../../../enums/users'
import auth from '../../middlewares/auth'
import validateRequest from '../../middlewares/validateRequest'
import { AuthController } from './auth.controller'
import { AuthValidation } from './auth.validation'

const router = express.Router()

// create user
router.post(
  '/signup',
  validateRequest(AuthValidation.authSignUpZodSchema),
  AuthController.authSignUp,
)

// login user
router.post(
  '/login',
  validateRequest(AuthValidation.authLoginZodSchema),
  AuthController.authLogin,
)

// refresh token
router.post(
  '/refresh-token',
  validateRequest(AuthValidation.refreshTokenZodSchema),
  AuthController.authRefreshToken,
)

// change password
router.post(
  '/change-password',
  auth(USER_ENUM.USER, USER_ENUM.ADMIN, USER_ENUM.SUPER_ADMIN),
  validateRequest(AuthValidation.changePasswordZodSchema),
  AuthController.authChangePassword,
)

export const AuthRoutes = router
