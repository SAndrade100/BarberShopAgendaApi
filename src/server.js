import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import routes from './routes/index.routes.js'

dotenv.config()
const app = express()

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200
}

app.use(express.json())
app.use(cors(corsOptions))

routes(app)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})