import { Schema, model } from 'mongoose'
import { IUser, UserModel } from './user.interface'

const userSchema = new Schema<IUser>(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
    },
    contactNo: {
      type: String,
    },
    dateOfBirth: {
      type: Date,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    walletId: {
      type: Schema.Types.ObjectId,
      ref: 'Wallet',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

const User = model<IUser, UserModel>('User', userSchema)

export default User
