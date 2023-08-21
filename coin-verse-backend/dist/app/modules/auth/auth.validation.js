"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthValidation = void 0;
const zod_1 = require("zod");
const authSignUpZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({ required_error: 'Email must be required' }).email(),
        password: zod_1.z.string({ required_error: 'Password must be required' }).min(6),
    }),
});
const authLoginZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({ required_error: 'Email must be required' }).email(),
        password: zod_1.z.string({ required_error: 'Password must be required' }).min(6),
    }),
});
const refreshTokenZodSchema = zod_1.z.object({
    cookies: zod_1.z.object({
        refreshToken: zod_1.z.string({ required_error: 'Refresh token is required' }),
    }),
});
const changePasswordZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        oldPassword: zod_1.z.string({ required_error: 'Old password is required' }),
        newPassword: zod_1.z.string({ required_error: 'New password is required' }),
    }),
});
exports.AuthValidation = {
    authSignUpZodSchema,
    authLoginZodSchema,
    refreshTokenZodSchema,
    changePasswordZodSchema,
};
