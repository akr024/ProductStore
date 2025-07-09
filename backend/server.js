import express from 'express';
import {connectDB} from './config/db.js'
import productRoutes from './routes/product.route.js'
import dotenv from 'dotenv'

dotenv.config();

const app = express();

app.use(express.json()); //middleware which parses json

app.use('/api/products', productRoutes);

app.listen(process.env.PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:3000")
})

