import React from 'react';

const Header = ({ title }) => (
    <nav className="nav-wrapper light-blue darken-3">
        <a href="www.google.es" className="brand-logo center">{ title }</a>
    </nav>
)

export default Header;