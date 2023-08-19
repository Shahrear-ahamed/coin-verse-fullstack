import { Model } from 'mongoose'

export type IWallet = {
  userId: string
  balance: number
}

export type WalletModel = Model<IWallet>
