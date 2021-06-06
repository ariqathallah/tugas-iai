import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import './Navbar.css';

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loadUser, logout, user, loading } = authContext;
  console.log(isAuthenticated);

  useEffect(() => {
    loadUser();
  }, [isAuthenticated, loading]);

  const onLogout = () => {
    logout();
  };

  return (
    <nav className='nav-container'>
      <div className='nav-components'>
        <div className='nav-link'>
          <Link to='#'>Dashboard</Link>
          <Link to='#'>Inventory</Link>
          <Link to='#'>Report</Link>
          <Link to='#'>Settings</Link>
        </div>

        <div className='nav-profile'>
          {/* <input type='search' name='' id='' placeholder='search' /> */}
          <div className='profile-icon'>
            <i className='far fa-user'></i>
          </div>
          <button className='logout-btn' onClick={onLogout}>
            <span>Logout </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
