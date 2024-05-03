import express, { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();

express.urlencoded({ extended: false });
express.json();

declare global {
  interface CustomError extends Error {
    status?: number;
  }
}

app.use(
  (error: CustomError, req: Request, res: Response, next: NextFunction) => {
    if (error.status) {
      return res.status(error.status).json({ message: error.message });
    }
    res.status(500).json('something went wrong');
  }
);

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
