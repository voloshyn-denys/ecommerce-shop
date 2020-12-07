import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Signin = (props) => {
    const { user, signin, history } = props;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const submitHandler = (evt) => {
        evt.preventDefault();
        signin(email, password);
    };

    useEffect(() => {
        if (user) history.push('/');
    }, [history, user])

    return (
        <div className="container">
            <form onSubmit={submitHandler}>
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
                <button type="submit" className="button">Sign in</button>
                <div>
                    If you are not registered, please <Link to='/signup'>Sign up</Link>.
                </div>
            </form>
        </div>
    )
};

export default Signin;