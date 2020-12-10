import bcrypt from 'bcryptjs';
import User from '../models/userModel.js';
import { generateToken } from '../utilities/userUtilities.js';

export const deleteUserById  = async (req, res) => {
    const deleted =  await User.deleteMany({_id: req.params.id});
    res.json(deleted);
};

export const getAllUsers = async (req, res) => {
    const fetchedUsers = await User.find({});
    res.json(fetchedUsers);
};

export const signinUser = async (req, res) => {
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
};

export const registerUser = async (req, res) => {
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
}