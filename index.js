import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRouter from "./route/users.route.js"
import coffeeRouter from "./route/coffees.route.js"
import orderRouter from './route/order.route.js';
dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGO_URI

app.use(cors({
    origin: ['https://coffee-house-client-sigma.vercel.app','http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect(MONGO_URI)
.then(() => {
    console.log("MongoDB connected")
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
})
.catch((err) => {
    console.error("MongoDB connection error:", err)
})
app.use("/api/v1", userRouter)
app.use("/api/v1", coffeeRouter)
app.use("/api/v1", orderRouter)

app.get("/", (req, res) => {
    res.send("Hello World")
})