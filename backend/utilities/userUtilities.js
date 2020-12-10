import jwt from 'jsonwebtoken';

export const generateToken = ({ _id, name, email, adminMode }) => (
    jwt.sign(
        { _id, name, email, adminMode },
        process.env.JWT_SECRET || 'somejwtsecret',
        { expiresIn: '30d' }
    )
);