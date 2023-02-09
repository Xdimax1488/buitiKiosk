import dotenv from 'dotenv';
import express from 'express';
import connectDatabase from './config/MongoDb.js';
import ImportData from './Dataimport.js';
import { errorHandler, notFound } from './Middleware/Erros.js';
import productRoute from './Routes/ProductRoutes.js';
import userRouter from './Routes/UseRoutes.js';
//import StoreData from './data/StoreData.js';

dotenv.config();
connectDatabase();
const app = express();
app.use(express.json())

//API
app.use('/api/import',ImportData)
app.use('/api/products',productRoute)
app.use('/api/users',userRouter)

// ERROR HANDLER
app.use(notFound)
app.use(errorHandler)


// //Load product
// app.get('/api/products', (req, res) => {
//   res.json(StoreData);
// });

// //Single product
// app.get('/api/products/:id', (req, res) => {
//   const product = StoreData.find((p) => p._id === req.params.id);
//   res.json(product);
// });

app.get('/', (req, res) => {
  res.send('api is hnh runni');
});

const PORT = process.env.PORT;

app.listen(PORT, console.log(`${PORT} listening on`));
