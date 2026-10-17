import express from "express"
import dotenv from "dotenv"

dotenv.config();

const app = express()
app.use(express.json())
const port = process.env.PORT || 5000

app.get("/health", (req, res)=>{
    return res.json({
        message : "all are good!"
    })
})

app.get("/", (req, res) => {
    return res.json({
        message: "Hello Kanha v1"
    })
})

app.listen(port, () => {
    console.log("Server is running on port ", port)
})