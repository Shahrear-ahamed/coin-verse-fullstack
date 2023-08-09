import User from './user.model'

const getMyProfile = (payload: string) => {
  return User.findOne({ userId: payload })
}

export const UserService = {
  getMyProfile,
}
