import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Register = (props) => {
    const { user, register, history } = props;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secondPassword, setSecondPassword] = useState('');
    
    const submitHandler = (evt) => {
        evt.preventDefault();
        if (password === secondPassword) {
            register({ email, password, name });
        } else {
            alert('Your passwords are not the same');
        }
    };

    useEffect(() => {
        if (user) history.push('/');
    }, [history, user])

    return (
        <div className="container">
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="name">Enter your name</label>
                    <input 
                        type="text" 
                        id="name" 
                        value={name}
                        onChange={evt => {
                            setName(evt.target.value);
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="email">Enter your email address</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={email}
                        onChange={evt => {
                            setEmail(evt.target.value);
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="password">Enter your password</label>
                    <input 
                        type="password" 
                        id="password"
                        value={password} 
                        onChange={evt => {
                            setPassword(evt.target.value);
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="secondPassword">Enter your password again</label>
                    <input 
                        type="password" 
                        id="secondPassword"
                        value={secondPassword} 
                        onChange={evt => {
                            setSecondPassword(evt.target.value);
                        }}
                    />
                </div>
                <button type="submit" className="button">Register</button>
                <div>
                    If you are already redistered, please <Link to='/signin'>Sign in</Link>.
                </div>
            </form>
        </div>
    )
};

export default Register;