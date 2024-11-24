import connectDB from '../database/db.js'

const routes = (app) => {
  connectDB()

  app.get('/', (req, res) => {
    res.send('API is running...')
  })

}

export default routes