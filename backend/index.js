import express from 'express';
import data from './data.js';

const app = express();

app.get('/', (req, res) => {
    res.send('Server has been started.')
});

app.get('/api/products', (req, res) => {
    res.json(data.products);
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});
