import express from 'express';
import asyncHandler from '../../middlewares/asyncHandler';
import requireGoogle from '../../middlewares/requireGoogle';
import fractalController from './controller';

const fractal = express.Router();

fractal.post('/', requireGoogle, asyncHandler(fractalController.saveFractal));

export default fractal;
