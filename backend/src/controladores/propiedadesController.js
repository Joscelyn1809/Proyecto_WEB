import { Propiedad } from "../modelos/Propiedad.js";
import { Propietario } from "../modelos/Propietario.js";

export const getAllPropiedades = async (req, res) => {
   try {
      const propiedades = await Propiedad.findAll(
         {
            include: Propietario
         }
      );
      res.json(propiedades);
   } catch (error) {
      res.status(500).json({ message: error.message })
   }
}

export const getPropiedadById = async (req, res) => {
   try {
      const id = req.params.id
      const propiedad = await Propiedad.findOne({
         where: {
            id: id
         },
         include: Propietario
      })

      res.json(propiedad);

   } catch (error) {
      console.log(error)
      res.status(500).json({ message: error.message })
   }
}

export const getPropiedadesFromPropietario = async (req, res) => {
   try {
      const id = req.params.idPropiedad
      const propiedad = await Propiedad.findOne({
         where: {
            id: id
         },
         include: Propietario
      })

      if (!propiedad) {
         return res.status(404).json({ message: 'Propiedad con id' + id + 'no encontrada' })
      }

      res.json(propiedad);

   } catch (error) {
      res.status(500).json({ message: error.message })
   }
}


export const createPropiedad = async (req, res) => {
   try {
      const { clave_catastral, descripcion, ArrendatarioId } = req.body
      const propiedad = await Propiedad.create({
         clave_catastral, descripcion, ArrendatarioId
      })

      res.json(propiedad)

   } catch (error) {
      res.status(500).json({ message: error.message })
   }
}

export const addPropiedadToPropietario = async (req, res) => {
   try {
      const { clave_catastral, descripcion, ArrendatarioId } = req.body
      const propiedad = await Propiedad.create({
         clave_catastral, descripcion, ArrendatarioId
      })

      res.json(propiedad)

   } catch (error) {
      res.status(500).json({ message: error.message })
   }
}

export const updatePropiedad = async (req, res) => {
   try {
      const { id, clave_catastral, descripcion, ArrendatarioId } = req.body
      const propiedad = await Propiedad.findByPk(id)

      if (!propiedad) {
         return res.status(404).json({ message: 'Propiedad con id' + id + 'no encontrada' })
      }
      console.log(propiedad)
      propiedad.id = id
      propiedad.clave_castral = clave_catastral
      propiedad.descripcion = descripcion
      propiedad.ArrendatarioId = ArrendatarioId

      await propiedad.save()

      res.json(propiedad);

   } catch (error) {
      res.status(500).json({ message: error.message })
   }
}

export const deletePropiedad = async (req, res) => {
   try {
      const id = req.params.id
      const propiedad = await Propiedad.findOne({
         where: {
            id: id
         },
      })

      if (!propiedad) {
         return res.status(404).json({ message: 'Propiedad no encontrada' })
      }

      await propiedad.destroy()

      res.json(propiedad);

   } catch (error) {
      console.log(error)
      res.status(500).json({ message: error.message })
   }
}
