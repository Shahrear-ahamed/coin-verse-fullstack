import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { CryptoService } from './crypto.service'

const homeCryptos = catchAsync(async (req, res) => {
  const result = await CryptoService.homeCryptos()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    status: true,
    message: 'Crypto currencies retrieved successfully',
    data: result,
  })
})

export const CryptoController = {
  homeCryptos,
}
