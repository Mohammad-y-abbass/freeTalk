import { Router } from 'express';
import { deletePost } from '../../controllers/post/delete.js';

const router = Router();

router.delete('/api/post/delete/:id', deletePost);

export { router as deletePostRouter };
