/* eslint-disable no-unused-vars */
import { Model } from 'mongoose'

export type IUser = {
  userId: string
  firstName: string
  lastName: string
  email: string
  contactNo: string
  dateOfBirth: Date
  balance: number
}

export type UserModel = Model<IUser>
