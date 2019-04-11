import express from 'express';
import asyncHandler from '../../middlewares/asyncHandler';
import requireGoogle from '../../middlewares/requireGoogle';
import userController from './controller';

const user = express.Router();

user.patch('/username', requireGoogle, asyncHandler(userController.updateUsername));

export default user;
