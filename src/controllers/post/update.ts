import { Request, Response, NextFunction } from 'express';
import Post from '../../models/post.js';

export const updatePost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  const { title, content } = req.body;

  if (!id) {
    const error = new Error('id is required') as CustomError;
    error.status = 400;
    next(error);
  }
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      {
        title,
        content,
      },
      { new: true }
    );

    return res.status(200).json(updatedPost);
  } catch (err) {
    const error = new Error('Failed to update post') as CustomError;
    error.status = 400;
    next(error);
  }
};
