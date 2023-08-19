import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { UserService } from './user.service'

const getMyProfile = catchAsync(async (req, res) => {
  const user = req.user

  // get user profile
  const result = await UserService.getMyProfile(user?.userId)

  // response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    status: true,
    message: 'Profile retrieved successfully',
    data: result,
  })
})

const updateMyProfile = catchAsync(async (req, res) => {
  const user = req.user

  // update user profile
  const result = await UserService.updateMyProfile(user?.userId, req.body)

  // response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    status: true,
    message: 'Profile updated successfully',
    data: result,
  })
})

export const UserController = {
  getMyProfile,
  updateMyProfile,
}
