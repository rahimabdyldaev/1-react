import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';

const HeaderComponent = () => {

   return (
        <header className={classes.header}>
            <div>
                <h1>
                    Shop
                </h1>

            <nav >
                <ul className={classes.header_nav}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to={'/about'} >About</Link></li>
                </ul>
            </nav>

            </div>
        </header>
    );
}

export default HeaderComponent;