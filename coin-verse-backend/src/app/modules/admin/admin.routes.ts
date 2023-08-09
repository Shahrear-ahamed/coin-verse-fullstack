import express from 'express'
import { USER_ENUM } from '../../../enums/users'
import auth from '../../middlewares/auth'
import { AdminController } from './admin.controller'

const router = express.Router()

router.get(
  '/all-users',
  auth(USER_ENUM.ADMIN, USER_ENUM.SUPER_ADMIN),
  AdminController.getAllUser,
)

export const AdminRoutes = router
