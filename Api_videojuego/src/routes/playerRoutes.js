import  express  from "express";
import {createPlayer,findOneByID,findOneByEmail,updatePlayer,changePlayerPortrait,deletePlayer} from "../controllers/playerController.js"

const router = express.Router()

router.post("/newplayer", createPlayer)
router.get("/findOne/:playerID", findOneByID)
router.get("/findOne/:playerEmail", findOneByEmail)
router.put("/upgrade/:playerID", updatePlayer)
router.patch("/changePortrait/:playerID", changePlayerPortrait)
router.delete("/deleteplayer/:playerID", deletePlayer)






export default router
