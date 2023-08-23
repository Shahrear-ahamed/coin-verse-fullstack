import { WalletPayload } from './wallet.interface'
import Wallet from './wallet.model'

const addWallet = async (userId: string, walletPayload: WalletPayload) => {
  return await Wallet.findOneAndUpdate(
    { userId },
    { $push: { myWallets: walletPayload } },
    { new: true },
  )
}

export const WalletService = {
  addWallet,
}
