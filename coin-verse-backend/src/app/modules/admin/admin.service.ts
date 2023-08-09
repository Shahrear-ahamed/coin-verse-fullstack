import Auth from '../auth/auth.model'

const getAllUsers = () => {
  return Auth.find({ role: { $eq: 'user' } })
    .select(['-_id', 'password', 'email', 'userId'])
    .sort({ createdAt: -1 })
}

export const AdminService = {
  getAllUsers,
}
