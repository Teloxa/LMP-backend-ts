"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmpleadoModel = /** @class */ (function () {
    function EmpleadoModel(data) {
        this.id = data.id;
        this.nombre = data.nombre;
        this.apaterno = data.apaterno;
        this.amaterno = data.amaterno;
        this.direccion = data.direccion;
        this.telefono = data.telefono;
        this.ciudad = data.ciudad;
        this.estado = data.estado;
        this.mail = data.mail;
        this.usuario = data.usuario;
        this.password = data.password;
    }
    return EmpleadoModel;
}());
exports.default = EmpleadoModel;
