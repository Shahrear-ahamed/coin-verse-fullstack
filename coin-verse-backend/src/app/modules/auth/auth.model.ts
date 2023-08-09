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
    passwordChangedAt: {
      type: Date,
      default: Date.now(),
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

authSchema.statics.matchPassword = async function (
  givenPassword: string,
  storedPassword: string,
): Promise<boolean> {
  return givenPassword === storedPassword
}

const Auth = model<IAuth, AuthModel>('Auth', authSchema)

export default Auth
