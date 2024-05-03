import { Request, Response, NextFunction } from 'express';
import Comment from '../../models/comment.js';

export const deleteComment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  if (!id) {
    const error = new Error('id is required') as CustomError;
    error.status = 400;
    next(error);
  }

  try {
    await Comment.findByIdAndDelete(id);

    return res.status(200).json({ message: 'Comment deleted successfully' });
  } catch (err) {
    const error = new Error('Failed to delete comment') as CustomError;
  }
};
