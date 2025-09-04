"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var dotenv_1 = require("dotenv");
dotenv_1.default.config();
var authMiddleware = function (req, res, next) {
    var _a;
    var token = (_a = req.headers['authorization']) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    if (!token) {
        return res.status(401).json({
            error: 'Token requerido'
        });
    }
    try {
        var decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch (error) {
        return res.status(401).json({
            error: 'Token invalido'
        });
    }
};
exports.authMiddleware = authMiddleware;
