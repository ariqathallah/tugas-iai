import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='nav-container'>
      <div className='nav-components'>
        <div className='nav-link'>
          <Link to='/dashboard'>Dashboard</Link>
          <Link to='#'>Inventory</Link>
          <Link to='#'>Report</Link>
          <Link to='#'>Settings</Link>
        </div>

        <div className='nav-profile'>
          <input type='search' name='' id='' placeholder='search' />
          <div className='profile-icon'>
            <i className='far fa-user'></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
