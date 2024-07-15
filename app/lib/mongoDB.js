import mongoose from "mongoose";

const DATABASE_URL = process.env.NEXT_PUBLIC_DATABASE_URL;

if (!DATABASE_URL) {
  throw new Error("Please define the DATABASE_URL environment variable inside .env.local");
}

async function connectToDatabase() {
 try {
    await mongoose.connect(DATABASE_URL)
 } catch(error){
    console.log(error);
 }
}

export default connectToDatabase;

