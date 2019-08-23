import express from 'express';
import default_page from './default';

const router = express.Router();

router.use('/', default_page);

export default router;
