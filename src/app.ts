import express from "express";
import dotenv from 'dotenv';
import router from "./routes/empleado.routes";
import cors from 'cors';

dotenv.config()

const app = express();
app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    res.send('Servidor funcionando')
})
app.use('/empleados', router)
const PORT = process.env.PORT || 5001
app.listen(PORT, () => {
    console.log(`Servidor trabajando ${PORT}`)
})