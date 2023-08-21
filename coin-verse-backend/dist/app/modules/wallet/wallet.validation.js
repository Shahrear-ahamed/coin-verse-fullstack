"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletValidation = void 0;
const zod_1 = require("zod");
const addWalletZSchema = zod_1.z.object({
    body: zod_1.z.object({
        walletName: zod_1.z.string({ required_error: 'Wallet name must be required' }),
        email: zod_1.z.string({ required_error: 'Email must be required' }),
        password: zod_1.z.string({ required_error: 'Password must be required' }),
    }),
});
exports.WalletValidation = { addWalletZSchema };
