import httpStatus from 'http-status'
import config from '../../../config'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { AuthService } from './auth.service'

const authSignUp = catchAsync(async (req, res) => {
  const userData = req.body

  const result = await AuthService.authSignUp(userData)

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    status: true,
    message: 'User created successfully',
    data: result,
  })
})

const authLogin = catchAsync(async (req, res) => {
  const userData = req.body
  const { refreshToken, ...result } = await AuthService.authLogin(userData)
  const cookieOptions = {
    httpOnly: true,
    secure: config.env === 'production',
  }

  res.cookie('refreshToken', refreshToken, cookieOptions)

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

  await AuthService.authChangePassword({ userId, oldPassword, newPassword })

  sendResponse(res, {
    statusCode: httpStatus.OK,
    status: true,
    message: 'Password changed successfully',
    data: null,
  })
})

export const AuthController = {
  authSignUp,
  authLogin,
  authRefreshToken,
  authChangePassword,
}
