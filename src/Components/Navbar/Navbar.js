import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const menuItem = <>
    
    <li><NavLink className='nav-btn' to='/'>Home</NavLink></li>
         
              <li><NavLink className='nav-btn'to='/appointment'>Appointment</NavLink></li>
              <li><NavLink className='nav-btn'to='/review'>Review</NavLink></li>
              <li><NavLink className='nav-btn'to='/contact'>Contact</NavLink></li>
              <li><NavLink className='nav-btn'to='/about'>About</NavLink></li>
              <li><NavLink className='nav-btn'to='/login'>LogIn</NavLink></li>
    
    </>
    return (
        <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabindex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" className=" menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52">
              {menuItem}
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" menu menu-horizontal p-0">
          {menuItem}
          </ul>
        </div>
      
      </div>
    );
};

export default Navbar;