import express from 'express';
import { users } from '../data.js';
import User from '../models/userModel.js';

const userRouter = express.Router();

userRouter.get('/seed', async (req, res) => {
    await User.remove({});
    const fetchedUsers = await User.insertMany(users);
    res.json(fetchedUsers);
});

userRouter.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    // TODO: bcrypt compare
    if (user && user.password === password) {
        res.send(user);
        return;
    };

    res.status(401).send({ message: 'Invalid email or password' });
});

export default userRouter;