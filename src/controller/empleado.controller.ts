import { Request, Response} from "express";
import EmpleadoService from "../services/empleado.service";
import EmpleadoModel from "../models/empleado.model";

const empleadoService = new EmpleadoService()

export default class EmpleadoController {
  static async create(req: Request, res: Response) {
    try {
      const empleado = new EmpleadoModel(req.body)
      const id = await empleadoService.create(empleado)
      res.status(201).json({
        id
      })
    } catch (error: any) {
      return res.status(401).json({
          error: error.message
      })
    }
  }
  //posible error (minuto 19)
  static async update(req: Request, res: Response) {
    try {
      await empleadoService.update(req.params.id, req.body)
      res.status(201).json({
        message: 'Actualizado correctamente'
      })
    } catch (error: any) {
      return res.status(401).json({
          error: error.message
      })
    }
  }
  static async delete(req: Request, res: Response) {
    try {
      await empleadoService.delete(req.params.id)
      res.status(201).json({
        message: 'Borrado correctamente'
      })
    } catch (error: any) {
      return res.status(401).json({
          error: error.message
      })
    }
  }
  static async getAll (req: Request, res: Response) {
    const empleados = await empleadoService.getAll()
    res.json(empleados)
  }
  static async login (req: Request, res: Response) {
    try {
      const { usuario, password } = req.body
      const token = await empleadoService.login(usuario, password)
      res.json({ token })
    } catch (error: any) {
      return res.status(401).json({
          error: error.message
      })
    }
  }
}