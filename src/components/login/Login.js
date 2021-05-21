import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div className='login-page'>
      <div className='login-box'>
        <h1>Login Dashboard</h1>

        <form action=''>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' id='' placeholder='Masukkan Email' />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id=''
            placeholder='Masukkan Kata Sandi'
          />
        </form>

        <Link to='/dashboard'>
          <button>Masuk</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
