import express from 'express';
import asyncHandler from '../../middlewares/asyncHandler';
import authController from './controller';

const auth = express.Router();

auth.post('/google-signin', asyncHandler(authController.googleSignIn));

export default auth;
