import React from 'react';

export const Navbar: React.FunctionComponent = () => (
    <nav>
        <div className="nav-wrapper blue darken-3 px1">
            <a href="/" className="brand-logo">REACT + TS</a>
            <ul className="right hide-on-med-and-down">
                <li><a href="/">Список дел</a></li>
                <li><a href="/">Информэйшн</a></li>
            </ul>
        </div>
    </nav>
);