import { IUser } from './user.interface'
import User from './user.model'

const getMyProfile = (payload: string) => {
  return User.findOne({ userId: payload }, { _id: 0, balance: 0 })
}

const updateMyProfile = async (userId: string, body: IUser) => {
  return await User.findOneAndUpdate({ userId }, body, { new: true }).select({
    _id: 0,
    balance: 0,
  })
}

export const UserService = {
  getMyProfile,
  updateMyProfile,
}
