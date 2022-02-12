import React from 'react';
import { NavLink } from 'react-router-dom';



const Nav = (props)=>{
    return(
        <nav className="main-nav">
            <ul>
                <li><NavLink exact to='/cats'>cats</NavLink></li>
                <li><NavLink to='/dogs'>dogs</NavLink></li>
                <li><NavLink to='/birds'>birds</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav;
