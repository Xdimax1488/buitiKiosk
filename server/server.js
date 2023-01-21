import express from 'express';
import StoreData from './data/StoreData.js';

const app = express();

//Load product
app.get('/api/products', (req, res) => {
  res.json(StoreData);
});

//Single product
app.get('/api/products/:id', (req, res) => {
    const product = StoreData.find((p) => p._id === req.params.id);
    res.json(product);
  });

app.get('/', (req, res) => {
  res.send('api is hnh runni');
});

app.listen(5000, console.log('server run'));
