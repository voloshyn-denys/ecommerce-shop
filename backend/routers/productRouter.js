import express from 'express';
import { products } from '../data.js';
import Product from '../models/productsModel.js';

const productRouter = express.Router();

productRouter.get('/seed', async (req, res) => {
    await Product.remove({});
    const fetchedProducts = await Product.insertMany(products);
    res.json(fetchedProducts);
});

productRouter.get('/',  async (req, res) => {
    const fetchedProducts = await Product.find({});
    res.json(fetchedProducts);
});

productRouter.get('/:id', async (req, res) => {
    const fetchedProduct = await Product.findById(req.params.id);
    res.json(fetchedProduct);
});

export default productRouter;