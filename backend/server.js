import express from "express"
import cors from 'cors'
import 'dotenv/config'
import connectDB from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"
import userRouter from "./routes/userRoute.js"
import doctorRouter from "./routes/doctorRoute.js"
import adminRouter from "./routes/adminRoute.js"

// app config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())
// app.use(cors())

app.use(cors({
  origin: ['http://localhost:5174', 'https://innvationmate-startup.vercel.app/'],  // ✅ Allow local & production frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// api endpoints
app.use("/api/user", userRouter)
app.use("/api/admin", adminRouter)
<<<<<<< HEAD
app.use("//api/expertise/", ExpertRouter)
=======
app.use("/api/doctor", doctorRouter)
>>>>>>> parent of e06ef44 (cc)

app.get("/", (req, res) => {
  res.send("API Working")
});

app.listen(port, () => console.log(`Server started on PORT:${port}`))