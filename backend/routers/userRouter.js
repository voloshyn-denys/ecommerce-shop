import express from 'express';
import bcrypt from 'bcryptjs';
import { users } from '../data.js';
import User from '../models/userModel.js';

const userRouter = express.Router();

const generateToken = (user) => {
    // jwt 
    return 'token';
};

userRouter.get('/seed', async (req, res) => {
    await User.remove({});
    const fetchedUsers = await User.insertMany(users);
    res.json(fetchedUsers);
});

userRouter.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && bcrypt.compareSync(password, user.password)) {
        res.send({
            adminMode: user.adminMode,
            password: user.password,
            email: user.email,
            name: user.name,
            token: generateToken(user)
        });
        return;
    };

    res.status(401).send({ message: 'Invalid email or password' });
});

export default userRouter;