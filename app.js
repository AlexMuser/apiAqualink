//Servidor express para probar
import express from "express"
import cors from 'cors'

//Importar la BD
import db from "./database/db.js"

import reportRoutes from './routes/routes.js'

const app = express()

app.use( cors())

app.use(express.json())

app.use('/reports', reportRoutes)

try {
    await db.authenticate()
    console.log('Conexion exitosa en la base de datos')
} catch (error) {
    console.log(`El error de conexión es: ${error}`);
}
app.get('/', (req, res) => {
    res.send('Hola Mundo')
})

app.listen(8000, () => {
    console.log('Servidor corriendo en http://localhost:8000/')
})