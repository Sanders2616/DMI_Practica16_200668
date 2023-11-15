import express from "express";
import playerRoutes from "./routes/playerRoutes.js" 
import dbConnection from "./config/db.js";
import Player from "./models/player.js"

const api = new express()
const port = 20068

api.use("/players", playerRoutes)


try{
    console.log("Status -> Intendando conectarse  ala base de datos... ")
    dbConnection.authenticate()
    console.log("status -> Conexion a la base de datos exitosa...")
    console.log("status -> Sincronizando la BD con los Objetos existentes")
    dbConnection.sync();
    console.log("Status -> DB Lista para realizar operaciones")
}
catch{
    console.error("Han ocurrido errores intentando conectarse a la base de datos")
    console.error(error)


}
api.listen(port,() =>{
    console.log(`El api  ha sido iniciada y se encuentra escuchando en el puerto: ${port}`)
})

