import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';

const app = express();
mongoose.connect('mongodb+srv://test:test@account.dctab.mongodb.net/ecommerce?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

app.get('/', (req, res) => {
    res.send('Server has been started.')
});

app.use('/api/users/', userRouter);
app.use('/api/products/', productRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});
