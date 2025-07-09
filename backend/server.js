import express, { application } from 'express';
import mongoose from 'mongoose';
import {connectDB} from './config/db.js'
import Product from './models/product.model.js'

const app = express();

app.use(express.json()); //middleware which parses json

app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({});
        return res.status(200).json({
            success: true,
            data: products
        })
    } catch (error) {
        console.log("Error is", error.message);
        return res.status(500).json({
            success: false,
            message: "Internal server error or ID not found"
        })
    }
})

app.post('/api/products', async (req, res) => {
    const product = req.body;

    if (!product.name || !product.price || !product.image){
        return res.status(400).json({
            success: false,
            message: "Some field missing"
        })
    }

    const newProduct = new Product(product);
    
    try {
        await newProduct.save();
        return res.status(201).json({
            success: true,
            message: "Product created"
        })
    } catch (error) {
        console.log("Error in creating product:", error.message);
        res.status(500).json({ // 500 status = internal server error
            success: false,
            message: "Server error"
        })

    }
})

app.patch('/api/products/:id', async (req, res) => {
    const id = req.params.id;
    const newProduct = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({
            success: false,
            message: "Invalid id"
        })
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, newProduct, {new: true});
        return res.status(400).json({
            success: true,
            message: "Product updated",
            data: updatedProduct
        })
    } catch (error) {
        console.log("Error is", error.message);
        return res.status(400).json({
            success: false,
            message: "Internal server error or ID not found"
        })
    }
})

app.delete('/api/products/:id', async (req, res) => {
    const id = req.params.id;
    
    try {
        await Product.findByIdAndDelete(id);
        return res.status(200).json({
            success: true,
            message: "Product deleted"
        })
    } catch (error) {
        console.log("Error is", error.message);
        return res.status(400).json({
            success: false,
            message: "Internal server error or ID not found"
        })
    }
})

app.listen(3000, () => {
    connectDB();
    console.log("Server started at http://localhost:3000")
})

