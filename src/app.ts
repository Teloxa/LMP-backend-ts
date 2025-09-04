import express from "express";
import dotenv from 'dotenv';
import router from "./routes/empleado.routes";

dotenv.config()

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Servidor funcionando')
})
app.use('/empleados', router)
const PORT = process.env.PORT || 5001
app.listen(PORT, () => {
    console.log(`Servidor trabajando ${PORT}`)
})