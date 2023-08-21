import { Schema, model } from 'mongoose'
import { IWallet, WalletModel } from './wallet.interface'

const userSchema = new Schema<IWallet>(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    balance: {
      type: Number,
      default: 20,
    },
    walletName: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

const Wallet = model<IWallet, WalletModel>('Wallet', userSchema)

export default Wallet
