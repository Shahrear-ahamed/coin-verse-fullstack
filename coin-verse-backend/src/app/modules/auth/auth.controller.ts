import httpStatus from 'http-status'
import { JwtPayload } from 'jsonwebtoken'
import config from '../../../config'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { AuthService } from './auth.service'

const authSignUp = catchAsync(async (req, res) => {
  const userData = req.body
  const { refreshToken, accessToken, ...result } = await AuthService.authSignUp(
    userData,
  )

  res.cookie('token', accessToken, {
    httpOnly: true,
    secure: config.env === 'production',
    expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
    // sameSite: 'none',
  })
  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: config.env === 'production',
    expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
    // sameSite: 'none',
  })

  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://coin-verse-frontend.vercel.app',
  )

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    status: true,
    message: 'User created successfully',
    data: result,
  })
})

const authLogin = catchAsync(async (req, res) => {
  const userData = req.body
  const { refreshToken, accessToken, ...result } = await AuthService.authLogin(
    userData,
  )

  res.cookie('token', accessToken, {
    httpOnly: true,
    secure: config.env === 'production',
    expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
    // sameSite: 'none',
  })
  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: config.env === 'production',
    expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
    // sameSite: 'none',
  })

  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://coin-verse-frontend.vercel.app',
  )

  sendResponse(res, {
    statusCode: httpStatus.OK,
    status: true,
    message: 'User logged in successfully',
    data: result,
  })
})

const authRefreshToken = catchAsync(async (req, res) => {
  const { refreshToken } = req.cookies

  const { refreshToken: newRefreshToken, ...result } =
    await AuthService.authRefreshToken(refreshToken)

  const cookieOptions = {
    httpOnly: true,
    secure: config.env === 'production',
    expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
  }

  res.cookie('refreshToken', newRefreshToken, cookieOptions)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    status: true,
    message: 'Token refreshed successfully',
    data: result,
  })
})

const authChangePassword = catchAsync(async (req, res) => {
  const userId = req.user?.userId
  const { oldPassword, newPassword } = req.body

  const result = await AuthService.authChangePassword({
    userId,
    oldPassword,
    newPassword,
  })

  sendResponse(res, {
    statusCode: httpStatus.OK,
    status: true,
    message: 'Password changed successfully',
    data: result,
  })
})

const currentUser = catchAsync(async (req, res) => {
  const user = req.user

  const result = await AuthService.currentUser(user as JwtPayload)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    status: true,
    message: 'Current user retrieved successfully',
    data: result,
  })
})

const logOut = catchAsync(async (req, res) => {
  const result = null

  const cookieOptions = {
    httpOnly: true,
    secure: config.env === 'production',
    expires: new Date(0),
  }

  res.cookie('refreshToken', '', cookieOptions)
  res.cookie('token', '', cookieOptions)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    status: true,
    message: 'User logged out successfully',
    data: result,
  })
})

const closeModal = catchAsync(async (req, res) => {
  const result = await AuthService.closeModal(req?.user?.userId as string)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    status: true,
    message: 'Modal closed successfully',
    data: result,
  })
})

export const AuthController = {
  authSignUp,
  authLogin,
  authRefreshToken,
  authChangePassword,
  currentUser,
  logOut,
  closeModal,
}
