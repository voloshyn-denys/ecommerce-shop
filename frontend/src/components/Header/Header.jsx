import React from 'react';
import s from './Header.module.sass';
import { Link } from 'react-router-dom';

const Header = (props) => {
    const { cartCount } = props;

    return (
        <header className={s.header}>
            <div className={`${s.header_container} container`}>
                <Link to="/" className={s.logo}>eCommerce</Link>
                <div>
                    <Link to="/cart">
                        <i className={s.header__cart}></i>
                    </Link>
                    {' '}
                    { cartCount > 0 && <span className="badge">{cartCount}</span> }
                </div>
            </div>
        </header>
    )
}

export default Header;