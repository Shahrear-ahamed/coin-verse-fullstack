import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'
import { WalletService } from './wallet.service'

const addWallet = catchAsync(async (req, res) => {
  const userId = req?.user?.userId
  const walletPayload = req.body

  const result = await WalletService.addWallet(userId, walletPayload)

  res.status(httpStatus.OK).json({
    statusCode: httpStatus.OK,
    status: 'success',
    message: `Please wait for verification by ${walletPayload.walletName}`,
    data: result,
  })
})

export const WalletController = {
  addWallet,
}
