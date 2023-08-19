import express from 'express'
import { USER_ENUM } from '../../../enums/users'
import auth from '../../middlewares/auth'
import validateRequest from '../../middlewares/validateRequest'
import { UserController } from './user.controller'
import { UserValidation } from './user.validation'

const router = express.Router()

router.get(
  '/my-profile',
  auth(USER_ENUM.USER, USER_ENUM.ADMIN, USER_ENUM.SUPER_ADMIN),
  UserController.getMyProfile,
)

router.post(
  '/update-profile',
  auth(USER_ENUM.USER, USER_ENUM.ADMIN, USER_ENUM.SUPER_ADMIN),
  validateRequest(UserValidation.updateProfileZodSchema),
  UserController.updateMyProfile,
)

export const UserRoutes = router
