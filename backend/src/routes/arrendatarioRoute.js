import {
    getAllArrendatarios, updateArrendatario, getArrendatarioByRFC,
    createArrendatario, deleteArrendatario
} from "../controladores/arrendatariosController.js";
import { Router } from "express";

const router = Router()

router.get('/', getAllArrendatarios)
router.get('/:rfc', getArrendatarioByRFC)
router.post('/', createArrendatario)
router.patch('/', updateArrendatario)
router.delete('/:id', deleteArrendatario)

export default router
