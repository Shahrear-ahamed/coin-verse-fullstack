import httpStatus from 'http-status'
import mongoose from 'mongoose'
import { v4 as uuidv4 } from 'uuid'
import config from '../../../config'
import ApiError from '../../../errors/ApiErrors'
import { JwtHelpers } from '../../../helpers/JwtHelpers'
import { IUser } from '../user/user.interface'
import User from '../user/user.model'
import { IAuth } from './auth.interface'
import Auth from './auth.model'

const authSignUp = async (payload: IUser) => {
  let userReturn

  // create unique id
  const userId = uuidv4()

  // create session
  const session = await mongoose.startSession()
  try {
    // start transaction
    session.startTransaction()

    const userPayload = { ...payload, userId }

    // create a auth if fail throw error
    const newAuth = await Auth.create([userPayload], { session })

    if (!newAuth.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Fail to create user', '')
    }

    // set user id into user, create user and throw error
    const preUserDetails = {
      userId,
      email: payload?.email,
    }
    const newUser = await User.create([preUserDetails], { session })

    if (!newUser.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Fail to create user', '')
    }

    // get auth and user
    const auth = newAuth[0]
    const user = newUser[0]

    const userDetails = {
      userId: user.userId,
      role: auth.role,
    }

    const accessToken = await JwtHelpers.createToken(
      userDetails,
      config.jwt_secret as string,
      config.jwt_expired as string,
    )

    userReturn = { userId, accessToken }

    // commit transaction and end transaction
    await session.commitTransaction()
    await session.endSession()
  } catch (error) {
    await session.abortTransaction()
    await session.endSession()
    throw error
  }

  return userReturn
}

const authLogin = async (payload: IAuth) => {
  const { email, password } = payload

  // check user exist
  const isUserExist = await Auth.isUserExist(email)

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found', '')
  }

  // check password match

  const passMatch = await Auth.matchPassword(password, isUserExist.password)

  if (!passMatch) {
    throw new ApiError(
      httpStatus.UNAUTHORIZED,
      'Email and Password are wrong',
      '',
    )
  }

  const userDetails = {
    userId: isUserExist.userId,
    role: isUserExist.role,
  }

  const accessToken = await JwtHelpers.createToken(
    userDetails,
    config.jwt_secret as string,
    config.jwt_expired as string,
  )
  const refreshToken = await JwtHelpers.createToken(
    userDetails,
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expired as string,
  )
  return {
    userId: isUserExist.userId,
    accessToken,
    refreshToken,
  }
}

export const AuthService = {
  authSignUp,
  authLogin,
}
