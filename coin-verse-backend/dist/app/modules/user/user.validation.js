"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const getProfileZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({ required_error: 'Title must be required' }),
    }),
});
const updateProfileZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        contactNo: zod_1.z.string().optional(),
        dateOfBirth: zod_1.z.string().optional(),
    }),
});
exports.UserValidation = { getProfileZodSchema, updateProfileZodSchema };
