import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken";
import EmpleadoRepository from '../Repositories/empleado.repository';
import EmpleadoModel from '../models/empleado.model';
import dotenv from 'dotenv'
dotenv.config()

export default class EmpleadoService {
  private empleadoRepository = new EmpleadoRepository()
  
  async create (empleado: EmpleadoModel): Promise<string> {
  const all = await this.empleadoRepository.getAll()

  const existsFullName = all.find(
    emp =>  emp.nombre === empleado.nombre &&
            emp.apaterno === empleado.apaterno &&
            emp.amaterno === empleado.amaterno
  )
  if (existsFullName) {
    throw new Error('El empleado ya existe')
  }

  const existsUsuario = await this.empleadoRepository.getByUsuario(empleado.usuario)
  if (existsUsuario) {
    throw new Error('El usuario ya existe')
  }
  empleado.password = await bcrypt.hash(empleado.password, 10)
  return await this.empleadoRepository.create(empleado)
}

async delete (id: string): Promise<void> {
  return this.empleadoRepository.delete(id)
}
async update (id: string, empleado: Partial<EmpleadoModel>): Promise<void> {
  if(empleado.password) {
    empleado.password = await bcrypt.hash(empleado.password, 10)
  }
  await this.empleadoRepository.update(id, empleado)
}
async getAll(): Promise<EmpleadoModel[]> {
  return this.empleadoRepository.getAll()
}

async login (usuario: string, password: string): Promise<string> {
  const empleado = await this.empleadoRepository.getByUsuario(usuario)
  if (!empleado) {
    throw new Error('Usuario no encontrado')
  }

  const valid = await bcrypt.compare(password, empleado.password)
  if (!valid) {
    throw new Error('Password incorrecto')
  }

  const token = jwt.sign({
      usuario: empleado.usuario,
      id: empleado.id,
      nombre: empleado.nombre
  }, process.env.JWT_SECRET!, {
      expiresIn: '1h'
  })

}

}