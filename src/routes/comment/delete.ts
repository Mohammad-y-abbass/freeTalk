import { Router } from 'express';
import { deleteComment } from '../../controllers/comment/delete';

const router = Router();

router.delete('/api/comment/delete/:id', deleteComment);

export { router as deleteCommentRouter };
