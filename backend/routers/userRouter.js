import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const userRouter = express.Router();

const generateToken = ({ _id, name, email, adminMode }) => (
    jwt.sign(
        { _id, name, email, adminMode },
        process.env.JWT_SECRET || 'somejwtsecret',
        { expiresIn: '30d' }
    )
);

userRouter.get('/clear/:id', async (req, res) => {
    const deleted =  await User.deleteMany({_id: req.params.id});
    res.json(deleted);
});

userRouter.get('/',  async (req, res) => {
    const fetchedUsers = await User.find({});
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

userRouter.post('/signup', async (req, res) => {
    const { email, password, name, adminMode = false } = req.body;

    const user = await User.create({
        adminMode,
        name, 
        email, 
        password: bcrypt.hashSync(password, 8)
    });

    res.send({
        adminMode: user.adminMode,
        password: user.password,
        email: user.email,
        name: user.name,
        token: generateToken(user)
    });
});

export default userRouter;