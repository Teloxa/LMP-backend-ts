"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var dotenv_1 = require("dotenv");
var empleado_routes_1 = require("./routes/empleado.routes");
dotenv_1.default.config();
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', function (req, res) {
    res.send('Servidor funcionando');
});
app.use('/empleados', empleado_routes_1.default);
var PORT = process.env.PORT || 5001;
app.listen(PORT, function () {
    console.log("Servidor trabajando ".concat(PORT));
});
