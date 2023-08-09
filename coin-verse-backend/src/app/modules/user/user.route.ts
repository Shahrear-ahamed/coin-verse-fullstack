import express from 'express'
import { USER_ENUM } from '../../../enums/users'
import auth from '../../middlewares/auth'
import { UserController } from './user.controller'

const router = express.Router()

router.get('/my-profile', auth(USER_ENUM.USER), UserController.getMyProfile)

export const UserRoutes = router
