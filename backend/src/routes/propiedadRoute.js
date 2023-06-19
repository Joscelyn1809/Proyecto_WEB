import { Router } from "express";
import { createPropiedad, deletePropiedad, 
    getAllPropiedades, getPropiedadById, updatePropiedad, addPropiedadToPropietario } 
    from "../controladores/propiedadesController.js";

const router = Router()

router.get('/', getAllPropiedades)
router.get('/:idPropiedad/propietarios', getPropiedadById)
router.post('/', createPropiedad)
router.post('/:idPropiedad/propietarios/:idPropietario', addPropiedadToPropietario)
router.patch('/', updatePropiedad)
router.delete('/:id', deletePropiedad)

export default router
