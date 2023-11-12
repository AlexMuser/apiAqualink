//Se importa el modelo
import ReportModel from "../models/reportModel.js";

//** METODOS PARA REALIZAR CRUD **/

//Mostrar todos los registros
export const getAllR = async (req, res)=> {
    try {
        const reports = await ReportModel.findAll()
        res.json(reports)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//Mostrar un registro
export const getReport = async (req, res) => {
    try {
        const report = await ReportModel.findAll({
            where: {
                id: req.params.id
            }
        })
        res.json(report)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//Crear un registro
export const createReport = async (req, res) => {
    try {
        await ReportModel.create(req.body)
        res.json({
            "message": "Registro creado correctamente"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Actualizar un registro
export const updateReport = async (req, res) => {
    try {
        await ReportModel.update(req.body, {
            where: { id: req.params.id }
        });
        res.json({
            "message": "Registro actualizado correctamente"
        });
    } catch (error) {
        res.json({ "message": error.message });
    }
};

//Eliminar un registro
export const deleteReport = async (req, res) => {
    try {
        await ReportModel.destroy({
            where: { id: req.params.id}
        })
        res.json({
            "message": "Registro eliminado correctamente"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}