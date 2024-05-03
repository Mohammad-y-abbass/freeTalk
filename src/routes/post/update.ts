import { Router } from 'express';
import { updatePost } from '../../controllers/post/update.js';

const router = Router();

router.patch('/api/post/update/:id', updatePost);

export { router as updatePostRouter };
