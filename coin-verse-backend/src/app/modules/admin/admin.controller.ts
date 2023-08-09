import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { AdminService } from './admin.service'

const getAllUser = catchAsync(async (req, res) => {
  // get all user profile
  const result = await AdminService.getAllUsers()

  // response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    status: true,
    message: 'all users profile retrieved successfully',
    data: result,
  })
})

export const AdminController = {
  getAllUser,
}
