import express from 'express';
import { initProducts, getAllProducts, getProductById } from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.get('/seed', initProducts);
productRouter.get('/', getAllProducts);
productRouter.get('/:id', getProductById);

export default productRouter;