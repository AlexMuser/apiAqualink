import express from "express"
import { createReport, deleteReport, getAllR, getReport, updateReport } from "../controllers/reportController.js"

const router = express.Router()

router.get('/', getAllR)
router.get('/:id', getReport)
router.post('/', createReport)
router.put('/:id', updateReport)
router.delete('/:id', deleteReport)

export default router