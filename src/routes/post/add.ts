import { Router } from 'express';
import { addPost } from '../../controllers/post/add';

const router = Router();

router.post('api/post/add', addPost);

export { router as addPostRouter };
