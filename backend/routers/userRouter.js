import express from 'express';
import { users } from '../data.js';
import User from '../models/userModel.js';

const userRouter = express.Router();

userRouter.get('/seed', async (req, res) => {
    await User.remove({});
    const fetchedUsers = await User.insertMany(users);
    res.json(fetchedUsers);
});

export default userRouter;