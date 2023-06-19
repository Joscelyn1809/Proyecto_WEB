import { Propietario } from "../modelos/Propietario.js";
import { Propiedad } from "../modelos/Propiedad.js";
import { Propietario_Propiedad_CrossRef } from "../modelos/PropietarioPropiedadCrossRef.js";


export const getAllPropietarios = async (req, res) => {
   try {
      const propietarios = await Propietario.findAll({
         include: Propiedad
      });

      res.json(propietarios);

   } catch (error) {
      res.status(500).json({ message: error.message })
   }
}

export const getPropietarioByRFC = async (req, res) => {
   try {
      const rfc = req.params.rfc
      const propietario = await Propietario.findOne({
         where: {
            rfc: rfc
         },
         include: Propiedad
      })

      return res.json(propietario);

   } catch (error) {
      console.log(error)
      res.status(500).json({ message: error.message })
   }
}

export const createPropietario = async (req, res) => {
   try {
      const { rfc, nombre, apellido } = req.body
      const propietario = await Propietario.create({
         rfc, nombre, apellido
      })

      res.json(propietario)

   } catch (error) {
      res.status(500).json({ message: error.message })
   }
}

export const updatePropietario = async (req, res) => {
   try {
      const { id, rfc, nombre, apellido } = req.body
      const propietario = await Propietario.findByPk(id)

      if (!propietario) {
         return res.status(404).json({ message: 'Propietario con ' + id + ' no encontrado' })
      }

      propietario.id = id
      propietario.rfc = rfc
      propietario.nombre = nombre
      propietario.apellido = apellido

      await propietario.save()

      res.json(propietario);

   } catch (error) {
      res.status(500).json({ message: error.message })
   }
}

export const deletePropietario = async (req, res) => {
   try {
      const id = req.params.id
      const propietario = await Propietario.findOne({
         where: {
            id: id
         },
      })

      if (!propietario) {
         return res.status(404).json({ message: 'Propietario con ' + proId +'no encontrado' })
      }

      await propietario.destroy()

      res.json(propietario);

   } catch (error) {
      console.log(error)
      res.status(500).json({ message: error.message })
   }
}


export const asignarPropietario = async (req, res) => {
   try {
      const { PropiedadId, PropietarioId } = req.body

      const propietario = await Propietario.findByPk(PropietarioId)
      if (!propietario) {
         return res.status(404).json({ message: 'Propietario no encontrado' })
      }

      const propiedad = await Propiedad.findByPk(PropiedadId)
      if (!propiedad) {
         return res.status(404).json({ message: 'Propiedad no encontrada' })
      }

      const propietarioAsignado = await Propietario_Propiedad_CrossRef.create({
         PropiedadId, PropietarioId
      })

      res.json(propietarioAsignado)

   } catch (error) {
      res.status(500).json({ message: error.message })
   }
}
