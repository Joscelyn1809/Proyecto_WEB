import express from "express";
import cors from "cors"
import arrendatarioRoute from './routes/arrendatarioRoute.js'
import propiedadRoute from './routes/propiedadRoute.js'
import propietarioRoute from './routes/propietarioRoute.js'
import logInRoute from './routes/logInRoute.js'
import { sequelize } from "./database/database.js";

import { Propietario } from "./modelos/Propietario.js";
import { Propiedad } from "./modelos/Propiedad.js";
import { Arrendatario } from "./modelos/Arrendatario.js";
import { Propietario_Propiedad_CrossRef } from "./modelos/PropietarioPropiedadCrossRef.js";

import fs from 'fs'
import https from 'https'

const app = express();

app.use(express.json());
app.use(cors());

import passport from "passport";
await import('./passport.js')

app.use('/arrendatarios/', passport.authenticate('jwt', { session: false }), arrendatarioRoute)
app.use('/propiedades/', passport.authenticate('jwt', { session: false }), propiedadRoute)
app.use('/propietarios/', passport.authenticate('jwt', { session: false }),propietarioRoute)
app.use('/login/', logInRoute)



const main = async () => {
  try {

    relations()
    await sequelize.sync({ force: false })

    https.createServer({
      cert: fs.readFileSync('./cert.pem'),
      key: fs.readFileSync('./key.pem')
    },
      app
    ).listen(4000, () => {
      console.log("Server en puerto 4000");
    })


  } catch (error) {
    console.log(error)
  }
}

function relations() {
  Arrendatario.hasMany(Propiedad)
  Propiedad.belongsTo(Arrendatario)

  Propiedad.belongsToMany(Propietario, { through: "Propietario_Propiedad_CrossRef" })
  Propietario.belongsToMany(Propiedad, { through: "Propietario_Propiedad_CrossRef" })

  Propietario_Propiedad_CrossRef.belongsTo(Propiedad)
  Propietario.hasMany(Propietario_Propiedad_CrossRef)

  Propietario_Propiedad_CrossRef.belongsTo(Propietario)
  Propiedad.hasMany(Propietario_Propiedad_CrossRef)
}

main()