"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const admin_routes_1 = require("../modules/admin/admin.routes");
const auth_route_1 = require("../modules/auth/auth.route");
const crypto_router_1 = require("../modules/cryptoCurrency/crypto.router");
const user_route_1 = require("../modules/user/user.route");
const wallet_route_1 = require("../modules/wallet/wallet.route");
const router = express_1.default.Router();
const routes = [
    {
        path: '/user',
        route: user_route_1.UserRoutes,
    },
    {
        path: '/auth',
        route: auth_route_1.AuthRoutes,
    },
    {
        path: '/admin',
        route: admin_routes_1.AdminRoutes,
    },
    {
        path: '/crypto',
        route: crypto_router_1.CryptoRouters,
    },
    {
        path: '/wallet',
        route: wallet_route_1.WalletRoutes,
    },
];
routes.forEach(route => {
    router.use(route.path, route.route);
});
exports.default = router;
