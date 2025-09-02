import { db } from "../config/firebase";
import EmpleadoModel from "../models/empleado.model";

const collection = db.collection("empleadosTS");

export default class EmpleadoRepository {
  async create(empleado: EmpleadoModel):
      Promise<string> {
        const EmpleadoCreated = await collection.add({...empleado});
        return EmpleadoCreated.id;    
  }

  async update (id: string, empleado:
      Partial<EmpleadoModel>): Promise<void> {
        await collection.doc(id).update(empleado)
  }

  async delete (id: string): Promise<void> {
      await collection.doc(id).delete();
  }

  async getAll(): Promise<EmpleadoModel[]> {  
      const empleadosDocs = await collection.get()
      return empleadosDocs.docs.map (empleado => ({
        id: empleado.id, 
        ...empleado.data()
      } as EmpleadoModel
      ))
  }

  async getByUsuario (usuario: string): Promise<EmpleadoModel | null> {
    const empleado = await collection.where("usuario", "==", usuario).get()
      if(empleado.empty) {
        return null
      }
      const empeladoFound = empleado.docs[0]
      return {
        id: empeladoFound.id,
        ...empeladoFound.data()
      } as EmpleadoModel
  }
}
