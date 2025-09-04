"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var bcryptjs_1 = require("bcryptjs");
var jsonwebtoken_1 = require("jsonwebtoken");
var empleado_repository_1 = require("../Repositories/empleado.repository");
var dotenv_1 = require("dotenv");
dotenv_1.default.config();
var EmpleadoService = /** @class */ (function () {
    function EmpleadoService() {
        this.empleadoRepository = new empleado_repository_1.default();
    }
    EmpleadoService.prototype.create = function (empleado) {
        return __awaiter(this, void 0, void 0, function () {
            var all, existsFullName, existsUsuario, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.empleadoRepository.getAll()];
                    case 1:
                        all = _b.sent();
                        existsFullName = all.find(function (emp) { return emp.nombre === empleado.nombre &&
                            emp.apaterno === empleado.apaterno &&
                            emp.amaterno === empleado.amaterno; });
                        if (existsFullName) {
                            throw new Error('El empleado ya existe');
                        }
                        return [4 /*yield*/, this.empleadoRepository.getByUsuario(empleado.usuario)];
                    case 2:
                        existsUsuario = _b.sent();
                        if (existsUsuario) {
                            throw new Error('El usuario ya existe');
                        }
                        _a = empleado;
                        return [4 /*yield*/, bcryptjs_1.default.hash(empleado.password, 10)];
                    case 3:
                        _a.password = _b.sent();
                        return [4 /*yield*/, this.empleadoRepository.create(empleado)];
                    case 4: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    EmpleadoService.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.empleadoRepository.delete(id)];
            });
        });
    };
    EmpleadoService.prototype.update = function (id, empleado) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!empleado.password) return [3 /*break*/, 2];
                        _a = empleado;
                        return [4 /*yield*/, bcryptjs_1.default.hash(empleado.password, 10)];
                    case 1:
                        _a.password = _b.sent();
                        _b.label = 2;
                    case 2: return [4 /*yield*/, this.empleadoRepository.update(id, empleado)];
                    case 3:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EmpleadoService.prototype.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.empleadoRepository.getAll()];
            });
        });
    };
    EmpleadoService.prototype.login = function (usuario, password) {
        return __awaiter(this, void 0, void 0, function () {
            var empleado, valid, token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.empleadoRepository.getByUsuario(usuario)];
                    case 1:
                        empleado = _a.sent();
                        if (!empleado) {
                            throw new Error('Usuario no encontrado');
                        }
                        return [4 /*yield*/, bcryptjs_1.default.compare(password, empleado.password)];
                    case 2:
                        valid = _a.sent();
                        if (!valid) {
                            throw new Error('Password incorrecto');
                        }
                        token = jsonwebtoken_1.default.sign({
                            usuario: empleado.usuario,
                            id: empleado.id,
                            nombre: empleado.nombre
                        }, process.env.JWT_SECRET, {
                            expiresIn: '1h'
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    return EmpleadoService;
}());
exports.default = EmpleadoService;
