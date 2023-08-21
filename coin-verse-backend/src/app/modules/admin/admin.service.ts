import Auth from '../auth/auth.model'

const getAllUsers = () => {
  const users = Auth.find({ role: { $eq: 'user' } })
    .populate('wallet', {
      _id: 0,
      userId: 0,
      createdAt: 0,
      updatedAt: 0,
    })
    .select(['-_id', 'password', 'email', 'userId', 'role'])
    .sort({ createdAt: -1 })

  return users
}

export const AdminService = {
  getAllUsers,
}
