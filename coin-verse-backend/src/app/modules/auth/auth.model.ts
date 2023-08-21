import { Schema, model } from 'mongoose'
import { USER_ENUM, userRole } from '../../../enums/users'
import { AuthModel, IAuth } from './auth.interface'

const authSchema = new Schema<IAuth>(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: userRole,
      default: USER_ENUM.USER,
    },
    wallet: {
      type: Schema.Types.ObjectId,
      ref: 'Wallet',
      required: true,
      unique: true,
    },
    passwordChangedAt: {
      type: Date,
      default: Date.now(),
    },
    showSignUpBonus: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

// statics are use
authSchema.statics.isUserExist = async function (
  email: string,
): Promise<IAuth> {
  return await this.findOne({ email }).select('+password')
}

authSchema.statics.isUserExistById = async function (
  userId: string,
): Promise<IAuth> {
  return await this.findOne({ userId }).select('+password')
}

authSchema.statics.matchPassword = async function (
  givenPassword: string,
  storedPassword: string,
): Promise<boolean> {
  return givenPassword === storedPassword
}

authSchema.statics.updatePassword = async function (
  userId: string,
): Promise<boolean> {
  const user = await this.findOne({ userId })

  const userPasswordChangedAt = user?.passwordChangedAt

  const currentDate = new Date()
  // Calculate the difference in milliseconds
  const timeDifference = currentDate.getTime() - userPasswordChangedAt.getTime()

  // Convert milliseconds to days
  const daysDifference = timeDifference / (1000 * 60 * 60 * 24)

  return daysDifference < 30
}

const Auth = model<IAuth, AuthModel>('Auth', authSchema)

export default Auth
