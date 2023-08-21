/* eslint-disable no-unused-vars */
import { Model, Schema } from 'mongoose'

export type IUser = {
  userId: string
  name: string
  email: string
  contactNo: string
  dateOfBirth: Date
  wallet: Schema.Types.ObjectId
}

export type UserModel = Model<IUser>
