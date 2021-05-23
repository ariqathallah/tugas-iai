import React, { useEffect, useContext } from "react";
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const Login = (props) => {
  const authContext = useContext(AuthContext);

  const { login, isAuthenticated } = authContext;
  
  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
  });

  const loginUser = (e) => {
    e.preventDefault();

    const loginForm = document.querySelector(".form-group");

    const data = {
      username: loginForm["adweb-username"].value,
      password: loginForm["adweb-password"].value,
    };

    login(data, false);
  };

  return (
    <div className='center_login'>
      <div className='login-container'>
        <h1>Welcome!</h1>
        <form onSubmit={loginUser} className="form-group">
          <div className='text-field_login'>
            <input type='username' required name='adweb-username' id='adweb-username' />
            <span></span>
            <label for='adweb-username'>Username</label>
          </div>

          <div className='text-field_login'>
            <input type='password' required name='adweb-password' id='adweb-password' />
            <span></span>
            <label for='adweb-password'>Password</label>
          </div>

          <div className='forgot-pass'>
            <Link to='#'>Forgot Password?</Link>
          </div>
            <button className='login-btn' type='submit'>
              Login
            </button>
          <div className='signup-link'>
            New to AdWeb? <Link to='#'>Create Account</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
