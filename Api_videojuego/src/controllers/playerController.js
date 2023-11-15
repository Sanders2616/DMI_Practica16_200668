const createPlayer = (req, rs)=>{
    console.log("Se ha solicitado la creacion de un nuevo usuario");
    rs.status(200);
    rs.send("Se ha solicitado la creacion de un nuevo usuario");

}
const findAll = (req, rs)=>{
    console.log(`Se ha solicitado buscar a todos los usuarios`);
    rs.status(200);
    rs.send(`Se ha solicitado buscar un usuariocon id: ${playerID}`);
}

const findOneByID = (req, rs)=>{
    const playerID = req.params.playerID
    console.log(`Se ha solicitado buscar un usuariocon id: ${playerID}`);
    rs.status(200);
    rs.send(`Se ha solicitado buscar un usuariocon id: ${playerID}`);
}

const findOneByEmail = (req, rs)=>{

    const playerEmail = req.params.playerEmail
    console.log(`Se ha solicitado buscar un usuariocon id: ${playerEmail}`);
    rs.status(200);
    rs.send(`Se ha solicitado buscar un usuariocon id: ${playerEmail}`);
}

const updatePlayer = (req, rs)=>{

    const playerID = req.params.playerID
    console.log(`Se ha solicitado la actualizaciond de datos del usuario: ${playerID}`);
    rs.status(200);
    rs.send(`Se ha solicitado la actualizaciond de datos del usuario: ${playerID}`);
}

const changePlayerPortrait = (req, rs)=>{

    const playerID = req.params.playerID
    console.log(`Se ha solicitado la actualizaciond de datos del usuario:${playerID}`);
    rs.status(200);
    rs.send(`Se ha solicitado la actualizaciond de datos del usuario:${playerID}`);
}

const deletePlayer = (req, rs)=>{

    const playerID = req.params.playerID
    console.log(`Se ha solicitado la actualizaciond de datos del usuario:${playerID}`);
    rs.status(200);
    rs.send(`Se ha solicitado la actualizaciond de datos del usuario:${playerID}`);
}


export {createPlayer,findOneByID,findOneByEmail,updatePlayer,changePlayerPortrait,deletePlayer}