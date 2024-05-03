import { Request, Response, NextFunction } from 'express';
import Comment from '../../models/comment.js';

export const addComment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { content } = req.body;
  const { postId } = req.params;

  if (!content) {
    const error = new Error('Content is required') as CustomError;
    error.status = 400;
    next(error);
  }
  const newComment = new Comment({
    content,
    post: postId,
  });
  await newComment.save();
  res.status(201).json(newComment);
};
