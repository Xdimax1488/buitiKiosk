import express from 'express';
import asyncHandler from 'express-async-handler';
import products from './data/StoreData.js';
import users from './data/users.js';
import Product from './Models/ProductModel.js';
import User from './Models/UserModel.js';

const ImportData = express.Router();

ImportData.post(
  '/user',
  asyncHandler(async (req, res) => {
    await User.remove({});
    const importUser = await User.insertMany(users);
    res.send({ importUser });
  }),
);
ImportData.post(
  '/products',
  asyncHandler(async (req, res) => {
    await Product.remove({});
    const importProducts = await Product.insertMany(products);
    res.send({ importProducts });
  }),
);

export default ImportData;
