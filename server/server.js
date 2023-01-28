import dotenv from 'dotenv';
import express from 'express';
import connectDatabase from './config/MongoDb.js';
import StoreData from './data/StoreData.js';

dotenv.config();
connectDatabase();
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

const PORT = process.env.PORT;

app.listen(PORT, console.log(`${PORT} listening on`));
