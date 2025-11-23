import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'


//App Config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()
const allowedOrigins = ["http://localhost:5174", "http://localhost:5173"]

//middleware
app.use(express.json())
app.use(cors({origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
     allowedHeaders: ["Content-Type", "Authorization", "token"]

}))
//api endpoints
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order', orderRouter)

app.get('/',(req,res)=>{
    res.send('Api working')
})

app.listen(port, ()=> console.log('Server stared on port : '+port))