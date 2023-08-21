"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRole = exports.USER_ENUM = void 0;
/* eslint-disable no-unused-vars */
var USER_ENUM;
(function (USER_ENUM) {
    USER_ENUM["SUPER_ADMIN"] = "super_admin";
    USER_ENUM["ADMIN"] = "admin";
    USER_ENUM["USER"] = "user";
})(USER_ENUM || (exports.USER_ENUM = USER_ENUM = {}));
exports.userRole = Object.values(USER_ENUM);
