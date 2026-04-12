import mongoose from "mongoose"
// import { DB_NAME } from "./constants"
import connectDB from "./db/config.js"
import "dotenv/config.js";


connectDB()















// import express from "express"
// const app = express()

// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.error("ERROR: ", error)
//             throw error
//         })
//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error("ERROR: ", error)
//         throw error
        
//     }
// })()
