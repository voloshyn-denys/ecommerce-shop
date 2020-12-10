import { products } from '../data.js';
import Product from '../models/productsModel.js';

export const initProducts = async (req, res) => {
    await Product.deleteMany({});
    const fetchedProducts = await Product.insertMany(products);
    res.json(fetchedProducts);
};

export const getAllProducts = async (req, res) => {
    const fetchedProducts = await Product.find({});
    res.json(fetchedProducts);
};

export const getProductById = async (req, res) => {
    const fetchedProduct = await Product.findById(req.params.id);
    res.json(fetchedProduct);
};