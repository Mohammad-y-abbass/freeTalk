import { Request, Response, NextFunction } from 'express';

export const addPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title, content } = req.body;
  if (!title || !content) {
    const error = new Error('title and content are required') as CustomError;
    error.status = 400;
    next(error);
  }
};

