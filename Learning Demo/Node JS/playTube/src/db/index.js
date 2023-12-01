import mongoose from 'mongoose';
import { DB_NAME } from '../constants';

export default connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.DB}/${DB_NAME}`);
    console.log("Connection with mongoDB🚀", connectionInstance)
  } catch (e) {
    console.log("MONGO DB CONNECTION ERROR :-", e);
    throw e;
  }
}
