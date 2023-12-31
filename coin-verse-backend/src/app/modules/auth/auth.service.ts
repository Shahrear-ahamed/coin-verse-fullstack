import httpStatus from 'http-status'
import { JwtPayload } from 'jsonwebtoken'
import mongoose from 'mongoose'
import { v4 as uuidv4 } from 'uuid'
import config from '../../../config'
import ApiError from '../../../errors/ApiErrors'
import { JwtHelpers } from '../../../helpers/JwtHelpers'
import { IUser } from '../user/user.interface'
import User from '../user/user.model'
import Wallet from '../wallet/wallet.model'
import { IAuth, IAuthChangePassword } from './auth.interface'
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

    // create a wallet if fail throw error
    const wallet = await Wallet.create([{ userId }], { session })

    if (!wallet.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Fail to create wallet', '')
    }

    // set wallet id into user
    const userPayload = { ...payload, userId, wallet: wallet[0]._id }

    // create a auth if fail throw error
    const newAuth = await Auth.create([userPayload], { session })

    if (!newAuth.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Fail to create user', '')
    }

    // set user id into user, create user and throw error
    const preUserDetails = {
      userId,
      email: payload?.email,
      wallet: wallet[0]._id,
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
    const refreshToken = await JwtHelpers.createToken(
      userDetails,
      config.jwt_refresh_secret as string,
      config.jwt_refresh_expired as string,
    )

    const result = { ...user.toObject(), role: auth.role }

    userReturn = { ...result, accessToken, refreshToken }

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
  const user = await User.findOne({ email })

  if (!isUserExist && user) {
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

  const result = { ...user?.toObject(), userId: isUserExist.userId }

  return {
    ...result,
    accessToken,
    refreshToken,
  }
}

const authRefreshToken = async (token: string) => {
  // verify token
  let verifiedToken = null
  try {
    verifiedToken = JwtHelpers.verifyToken(
      token,
      config.jwt_refresh_secret as string,
    )
  } catch (error) {
    throw new ApiError(httpStatus.FORBIDDEN, 'Invalid Refresh Token', '')
  }

  const { userId } = verifiedToken

  const isUserExist = await Auth.isUserExistById(userId)

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found', '')
  }

  // get user details
  const userDetails = {
    userId: isUserExist.userId,
    role: isUserExist.role,
  }

  // create new access token and refresh token
  const accessToken = await JwtHelpers.createToken(
    userDetails,
    config.jwt_secret as string,
    config.jwt_expired as string,
  )

  const newRefreshToken = await JwtHelpers.createToken(
    userDetails,
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expired as string,
  )

  return {
    userId: isUserExist.userId,
    accessToken,
    refreshToken: newRefreshToken,
  }
}

const authChangePassword = async (payload: IAuthChangePassword) => {
  const { userId, oldPassword, newPassword } = payload

  // check user exist
  const isUserExist = await Auth.isUserExistById(userId)

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found', '')
  }

  // check password match
  const passMatch = await Auth.matchPassword(oldPassword, isUserExist.password)

  if (!passMatch) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Current password is wrong', '')
  }

  // update password
  const checkPasswordChangeCapability = await Auth.updatePassword(userId)

  if (!checkPasswordChangeCapability) {
    throw new ApiError(httpStatus.BAD_REQUEST, "You can't change password", '')
  }

  const changePassword = await Auth.findOneAndUpdate(
    { userId },
    { password: newPassword },
    { new: true },
  ).select('-password -createdAt -updatedAt  -_id')

  if (!changePassword) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Fail to change password', '')
  }

  return changePassword
}

const currentUser = async (tokenUser: JwtPayload) => {
  const { userId } = tokenUser

  const auth = await Auth.findOne({ userId })
  const user = await User.findOne({ userId })
  const wallet = await Wallet.findOne(
    { userId },
    { _id: 0, userId: 0, createdAt: 0, updatedAt: 0 },
  )

  if (!auth && !user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found', '')
  }

  return {
    ...user?.toObject(),
    ...wallet?.toObject(),
    role: auth?.role,
    showSignUpBonus: auth?.showSignUpBonus,
  }
}

const closeModal = async (userId: string) => {
  const auth = await Auth.findOneAndUpdate(
    {
      userId,
    },
    {
      showSignUpBonus: false,
    },
    { new: true },
  )

  if (!auth) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found', '')
  }

  return auth
}

export const AuthService = {
  authSignUp,
  authLogin,
  authRefreshToken,
  authChangePassword,
  currentUser,
  closeModal,
}
