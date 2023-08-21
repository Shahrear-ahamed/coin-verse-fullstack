import { WalletPayload } from './wallet.interface'
import Wallet from './wallet.model'

const addWallet = async (userId: string, walletPayload: WalletPayload) => {
  const wallet = await Wallet.findOne({ userId })

  if (wallet?.walletName === walletPayload.walletName)
    throw new Error(`You can not add same ${walletPayload.walletName}`)

  return await Wallet.findOneAndUpdate({ userId }, walletPayload, {
    new: true,
  })
}

export const WalletService = {
  addWallet,
}
