import React from 'react';

const Header = ({ title }) => (
    <nav className="nav-wrapper light-blue darken-3">
        <a className="brand-logo text-center">{title}</a>
    </nav>
)

export default Header;