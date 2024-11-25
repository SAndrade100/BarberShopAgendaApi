import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200
}

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors(corsOptions))

export default app