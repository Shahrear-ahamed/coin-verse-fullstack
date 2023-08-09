import { z } from 'zod'

const authSignUpZodSchema = z.object({
  body: z.object({
    email: z.string({ required_error: 'Email must be required' }).email(),
    password: z.string({ required_error: 'Password must be required' }).min(6),
  }),
})

const authLoginZodSchema = z.object({
  body: z.object({
    email: z.string({ required_error: 'Email must be required' }).email(),
    password: z.string({ required_error: 'Password must be required' }).min(6),
  }),
})

const refreshTokenZodSchema = z.object({
  cookies: z.object({
    refreshToken: z.string({ required_error: 'Refresh token is required' }),
  }),
})

const changePasswordZodSchema = z.object({
  body: z.object({
    oldPassword: z.string({ required_error: 'Old password is required' }),
    newPassword: z.string({ required_error: 'New password is required' }),
  }),
})

export const AuthValidation = {
  authSignUpZodSchema,
  authLoginZodSchema,
  refreshTokenZodSchema,
  changePasswordZodSchema,
}
