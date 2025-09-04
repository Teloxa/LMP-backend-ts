"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var empleado_controller_1 = require("../controller/empleado.controller"); // no puse atencion en el minuto 34 porque en esta linea hay algo mal u otro codigo
var auth_middleware_1 = require("../middleware/auth.middleware");
var router = (0, express_1.Router)();
router.post('/create', empleado_controller_1.default.create);
router.put('/update/:id', auth_middleware_1.authMiddleware, empleado_controller_1.default.update);
router.delete('/delete/:id', auth_middleware_1.authMiddleware, empleado_controller_1.default.delete);
router.get('/getAll', auth_middleware_1.authMiddleware, empleado_controller_1.default.getAll);
router.post('/login', empleado_controller_1.default.login);
exports.default = router;
