import express from "express"
import * as dotenv from "dotenv"
import db from "./src/db"
import { follow, getFollowers } from "./src/controllers/follow"
import router from "./src/routes/"

dotenv.config()
const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(router)

app.get("/", async (req, res) => {
    const listUser = await db.user.findMany()

    const singleUser = await db.user.findFirst({
        where: {
            id: 2
        }
    })
    
    res.send({
        listUser,
        singleUser
    })
})

app.post("/follow", follow)
app.get("followers", getFollowers)

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
    
})