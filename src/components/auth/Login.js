import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='center_login'>
      <div className='login-container'>
        <h1>Welcome!</h1>
        <form method='post'>
          <div className='text-field_login'>
            <input type='email' required name='email' id='' />
            <span></span>
            <label htmlFor='email'>Email</label>
          </div>

          <div className='text-field_login'>
            <input type='password' required name='password' id='' />
            <span></span>
            <label htmlFor='password'>Password</label>
          </div>

          <div className='forgot-pass'>
            <Link to='#'>Forgot Password?</Link>
          </div>
          <Link to='/dashboard'>
            <button className='login-btn' type='submit'>
              Login
            </button>
          </Link>
          <div className='signup-link'>
            New to AdWeb? <Link to='#'>Create Account</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

{
  /* <Link to='/dashboard'>
          <button>Masuk</button>
        </Link> */
}
