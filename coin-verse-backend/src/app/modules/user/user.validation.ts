import { z } from 'zod'

const getProfileZodSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title must be required' }),
  }),
})

const updateProfileZodSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    contactNo: z.string().optional(),
    dateOfBirth: z.string().optional(),
  }),
})

export const UserValidation = { getProfileZodSchema, updateProfileZodSchema }
