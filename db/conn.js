import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const uri = process.env.MONGO_URI

async function run() {
   try {
      await mongoose.connect(uri)
      console.log("Conectou ao MongoDB com Mongoose!")
   } catch (error) {
      console.log(error);
   }
}
run()

export default mongoose