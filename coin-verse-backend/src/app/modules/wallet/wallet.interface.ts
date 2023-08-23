import { Model } from 'mongoose'

export type IWallet = {
  userId: string
  balance: number
  myWallets: WalletPayload[]
}

export type WalletPayload = {
  walletName: string
  id: string
  password: string
}

export type WalletModel = Model<IWallet>
