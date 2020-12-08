import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: String,
    photos: [ String ],
    category: String,
    brand: String,
    price: Number,
    quantity: Number,
    rating: { stars: Number, reviews: Number },
    description: String
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);
export default Product;