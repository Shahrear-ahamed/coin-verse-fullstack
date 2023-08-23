import httpStatus from 'http-status'
import ApiError from '../../../errors/ApiErrors'
import { AuthService } from '../auth/auth.service'
import { IUser } from './user.interface'
import User from './user.model'

const getMyProfile = (payload: string) => {
  return User.findOne({ userId: payload }, { _id: 0, balance: 0 })
}

const updateMyProfile = async (userId: string, body: IUser) => {
  const result = await User.findOneAndUpdate({ userId }, body, { new: true })

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found', '')
  }

  return await AuthService.currentUser({ userId })
}

export const UserService = {
  getMyProfile,
  updateMyProfile,
}
