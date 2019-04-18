import express from 'express';

import auth from './auth';
import user from './user';
import fractal from './fractal';

const router = express.Router();

router.use('/auth', auth);
router.use('/user', user);
router.use('/fractal', fractal);

export default router;
