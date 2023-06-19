import { Router } from "express";
import {
    asignarPropietario,
    createPropietario, deletePropietario, getAllPropietarios,
    getPropietarioByRFC, updatePropietario
} from "../controladores/propietariosController.js";


const router = Router()

router.get('/', getAllPropietarios)
router.get('/:rfc', getPropietarioByRFC)
router.post('/', createPropietario)
router.patch('/', updatePropietario)
router.delete('/:id', deletePropietario)
router.put('/', asignarPropietario)



export default router
