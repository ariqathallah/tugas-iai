import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='nav-container'>
      <div className='nav-components'>
        <div className='nav-link'>
          <a href='#'>Dashboard</a>
          <a href='#'>Inventory</a>
          <a href='#'>Report</a>
          <a href='#'>Settings</a>
        </div>

        <div className='nav-profile'>
          <input type='search' name='' id='' placeholder='search' />
          <div className='profile-icon'>
            <i class='far fa-user'></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
