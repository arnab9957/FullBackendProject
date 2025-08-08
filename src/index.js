import connectDB from "./db/index.js";
// require('dotenv').config({path: './env'}) // the will create a inconsistency in the code...

import dotenv from "dotenv"
dotenv.config({path: './env'})

connectDB()











//.......This is a basic approach......
/*
import express from "express"
const app = express()

    //we can put a function here but we use a ifeis
    // ( ()=>{} ) ()

    (async () => {
        //always rap it in a try catch block to handle the errors
        try {
            await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
            app.on("error", (error) => {
                console.error("Error in app: ", error);
                throw error
            }) //Maybe the app is not working for that reason we have to add listeners after the db connection

            app.listen(process.env.PORT, () => { 
                console.log(`App is listening on port: ${process.env.PORT}`);
                
            })


        } catch (error) {
            console.error("Error: ", error);
            throw error
        }
    })()
*/