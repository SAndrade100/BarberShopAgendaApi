import mongoose from 'mongoose'
import dotenv from 'dotenv'

import counterSingleton from './counterSingleton.js'

dotenv.config()

const connectDB = async () => {
  try {

    await mongoose.connect(process.env.MONGO_DOCKER)
    await mongoose.syncIndexes()
    console.log('MongoDB connected')

    await counterSingleton()

  } catch (error) {
    console.error('MongoDB connection failed', error.message)
    process.exit(1);
  }
};

export default connectDB;