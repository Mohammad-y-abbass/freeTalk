import { Router } from 'express';
import { addComment } from '../../controllers/comment/add.js';

const router = Router();

router.post('/api/comment/add', addComment);

export { router as addCommentRouter };
