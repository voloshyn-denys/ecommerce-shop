import express from 'express';
import { deleteUserById, getAllUsers, registerUser, signinUser } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.get('/clear/:id', deleteUserById);
userRouter.get('/', getAllUsers);
userRouter.post('/signin', signinUser);
userRouter.post('/register', registerUser);

export default userRouter;