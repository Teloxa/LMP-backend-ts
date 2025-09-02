import EmpleadoInterface from "../interfaces/empleado.interface";

export default class EmpleadoModel implements EmpleadoInterface {
id?: string;
  nombre: string;
  apaterno: string;
  amaterno: string;
  direccion: string;
  telefono: string;
  ciudad: string;
  estado: string;
  mail: string;
  usuario: string;
  password: string;

  constructor(data: EmpleadoInterface) {
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
}
