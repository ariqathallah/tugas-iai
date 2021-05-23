import React, { useContext, useEffect } from 'react';
import AuthContext from '../context/auth/authContext';
import Navbar from '../components/navbar/Navbar';
import './Main.css';

const Main = () => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, loadUser, logout, user, loading } = authContext;
  console.log(isAuthenticated)

  useEffect(() => {
    loadUser();
  }, [isAuthenticated, loading]);

  const onLogout = () => {
    logout();
  };

  return (
    <div>
      <Navbar />
      <div className='main'>
        <h1>waiting for API</h1>
        <button onClick={onLogout}>Log out</button>
      </div>
    </div>
  );
};

export default Main;
