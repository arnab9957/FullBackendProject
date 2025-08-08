import mongoose, { mongo } from "mongoose";
import { DB_NAME } from "../constants.js";


//DB is in another contenent

const connectDB = async ()=>{
    try {
        const DBInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log(`MongoDB Connected !!: DB host : ${DBInstance.connection.host}`) //DBInstance is an object [object Object]
    } catch (error) {
        console.error(`Error in DB conection : ${error}`)
        process.exit(1)
    }
} 

export default connectDB;