import './Header.css';

import React from 'react';

const Header = () => {
    return (
        <nav class="header__container">
            <h2 class="logo">Knowledge Cafe</h2>
            <img src="user.png" alt="user" />
        </nav>
    );
};

export default Header;