import express from 'express';
import asyncHandler from '../../middlewares/asyncHandler';
import requireGoogle from '../../middlewares/requireGoogle';
import authController from './controller';

const auth = express.Router();

auth.post('/google-signin', requireGoogle, asyncHandler(authController.googleSignIn));

export default auth;
