import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();

express.urlencoded({ extended: false });
express.json();

declare global {
  interface CustomeError extends Error {
    status? : number,
    
  }
}

const start = async () => {
  if (!process.env.MONGO_URI) {
    throw new Error('Please define a MONGO_URI environment variable');
  }
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err: any) => {
      console.log('Error connecting to MongoDB', err);
    });
};

start();

app.listen(3001, () => {
  console.log('Server is running on port 3000');
});
