import { Request, Response, NextFunction } from 'express';
import Post from '../../models/post';

export const deletePost = async (
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
    await Post.findByIdAndDelete(id);

    return res.status(200).json({ message: 'Post deleted successfully' });
  } catch (err) {
    const error = new Error('Failed to delete post') as CustomError;
    error.status = 400;
    next(error);
  }
};
