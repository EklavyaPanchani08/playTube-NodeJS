import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.DB}/${DB_NAME}`);
    console.log("Connection with mongoDB🚀")
  } catch (e) {
    console.log("MONGO DB CONNECTION ERROR :-", e);
    throw e;
  }
}
export default connectDB;