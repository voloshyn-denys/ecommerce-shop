import React from 'react';
import s from './Header.module.sass';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className={s.header}>
            <div className="container">
                <Link to="/" className={s.logo}>eCommerce</Link>
            </div>
        </header>
    )
}

export default Header;