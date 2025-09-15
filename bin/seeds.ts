import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Food from '../models/Food';

dotenv.config();

mongoose.connect(process.env.MONGODB_URI as string, {
  // @ts-ignore
  keepAlive: true,
  useNewUrlParser: true,
  // @ts-ignore
  reconnectTries: Number.MAX_VALUE
});

const seeds = [
  // ...copy all seed objects from seeds.js here...
];

Food.insertMany(seeds)
  .then(() => {
    console.log('Seeds inserted successfully');
    mongoose.connection.close();
  })
  .catch((error) => {
    console.log(error);
    mongoose.connection.close();
  });
