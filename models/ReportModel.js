//Importar la conexión de la BD
import db from "../database/db.js"

import { DataTypes } from "sequelize"

const ReportModel = db.define('reports',{
    date_hour: {type: DataTypes.DATE},
    totalLiters: {type: DataTypes.NUMBER}
})

export default ReportModel