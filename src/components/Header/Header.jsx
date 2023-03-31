import './Header.css';

import React from 'react';

const Header = () => {
    return (
        <nav className="header__container">
            <h2 className="logo">Knowledge Cafe</h2>
            <img src="user.png" alt="user" />
        </nav>
    );
};

export default Header;