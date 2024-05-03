import { Router } from 'express';
import { updatePost } from '../../controllers/post/update';

const router = Router();

router.patch('/api/post/:id', updatePost);

export { router as updatePostRouter };
