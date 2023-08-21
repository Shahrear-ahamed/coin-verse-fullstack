import { Model } from 'mongoose'

export type IWallet = {
  userId: string
  balance: number
  walletName: string
  email: string
  password: string
}

export type WalletPayload = {
  walletName: string
  email: string
  password: string
}

export type WalletModel = Model<IWallet>
