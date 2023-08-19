/* eslint-disable no-unused-vars */
import { Model } from 'mongoose'

export type IUser = {
  userId: string
  name: string
  email: string
  contactNo: string
  dateOfBirth: Date
  balance: number
}

export type UserModel = Model<IUser>
