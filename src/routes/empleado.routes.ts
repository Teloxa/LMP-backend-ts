import { Router } from "express";
import EmpleadoController from "../controller/empleado.controller"; // no puse atencion en el minuto 34 porque en esta linea hay algo mal u otro codigo
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router()

router.post('/create', EmpleadoController.create);
router.put('/update/:id', authMiddleware, EmpleadoController.update)
router.delete('/delete/:id', authMiddleware, EmpleadoController.delete)
router.get('/getAll', authMiddleware, EmpleadoController.getAll)
router.post('/login', EmpleadoController.login)

export default router