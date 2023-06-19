import { Arrendatario } from "../modelos/Arrendatario.js";
import { Propiedad } from "../modelos/Propiedad.js";

export const getAllArrendatarios = async (req, res) => {
   try {
      const arrendatarios = await Arrendatario.findAll({
         include: Propiedad
      });

      res.json(arrendatarios);

   } catch (error) {
      res.status(500).json({ message: error.message })
   }
}

export const getArrendatarioByRFC = async (req, res) => {
   try {
      const rfc = req.params.rfc
      const arrendatario = await Arrendatario.findOne({
         where: {
            rfc: rfc
         },
         include: Propiedad
      })

      return res.json(arrendatario);

   } catch (error) {
      console.log(error)
      res.status(500).json({ message: error.message })
   }
}

export const createArrendatario = async (req, res) => {
   try {
      const { rfc, nombre, apellido } = req.body
      const arrendatario = await Arrendatario.create({
         rfc, nombre, apellido
      })

      res.json(arrendatario)

   } catch (error) {
      res.status(500).json({ message: error.message })
   }
}

export const updateArrendatario = async (req, res) => {
   try {
      const {id, rfc, nombre, apellido } = req.body
      const arrendatario = await Arrendatario.findByPk(id)

      if (!arrendatario) {
         return res.status(404).json({ message: 'Arrendatario no encontrado' })
      }
      arrendatario.id= id
      arrendatario.rfc = rfc
      arrendatario.nombre = nombre
      arrendatario.apellido = apellido

      await arrendatario.save()

      res.json(arrendatario);

   } catch (error) {
      res.status(500).json({ message: error.message })
   }
}

export const deleteArrendatario = async (req, res) => {
   try {
      const id = req.params.id
      const arrendatario = await Arrendatario.findOne({
         where: {
            id: id
         },
      })

      if (!arrendatario) {
         return res.status(404).json({ message: 'Arrendatario con id ' + id + ' no encontrado' })
      }

      await arrendatario.destroy()

      res.json(arrendatario);

   } catch (error) {
      console.log(error)
      res.status(500).json({ message: error.message })
   }
}
