import { z } from 'zod'

const getProfileZodSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title must be required' }),
  }),
})

export const UserValidation = { getProfileZodSchema }
