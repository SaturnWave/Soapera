import React from "react";
import * as FaIcons from "react-icons/fa";
import {Link} from 'rect-routerdom';

function Navbar(){
    <>
    <div className="Nav-bar">
        <Link to="#" className='menu-nars'>
        <FaIcons.FaBars/>
        </Link>
        
    </div>
    <nav className={sidebar ? 'nav-menu-active' : 'nav-menu'}></nav>
    <ul className="nav-menu-items">

    </ul>
    </>
}