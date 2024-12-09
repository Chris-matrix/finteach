//import express from 'express';
import sequelize from './config/database.js';
//import routes from './routes/index.js';
import User from './models/user.js';
import Transaction from './models/transaction.js';
//import 'dotenv/config';

try {

  sequelize.authenticate()
  console.log('databse connected')

  await User.sync();
  await Transaction.sync();

console.log('Database synchronized')


} catch (error) {
  console.error('Error connecting to the database:', error);
}