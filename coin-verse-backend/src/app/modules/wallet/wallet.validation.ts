import { z } from 'zod'

const addWalletZSchema = z.object({
  body: z.object({
    walletName: z.string({ required_error: 'Wallet name must be required' }),
    email: z.string({ required_error: 'Email must be required' }),
    password: z.string({ required_error: 'Password must be required' }),
  }),
})

export const WalletValidation = { addWalletZSchema }
