import React, { useReducer } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken';

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isRegistered: null,
    loading: true,
    error: null,
    user: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User
  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      state.token = localStorage.token;
      dispatch({ type: 'USER_LOADED', payload: 'data user' });
    } else {
      dispatch({ type: 'AUTH_ERROR' });
    }

    // const config = {
    //   headers: {
    //     "adweb-token": `${state.token}`
    //   }
    // };

    // try {
    //   const res = await axios.get(
    //     'https://adweb-api.herokuapp.com/profile',
    //     config
    //   );

    //   dispatch({ type: "USER_LOADED", payload: res.data });
    // } catch (err) {
    //   dispatch({ type: "AUTH_ERROR" });
    // }
  };

  // Registering user
  const register = async (userData) => {
    try {
      const res = await axios.post(
        'https://adweb-api.herokuapp.com/register',
        userData
      );

      swal(
        '',
        'Akun telah berhasil ditambahkan! Anda akan dialihkan ke dashboard admin beberapa saat lagi . . .',
        'success',
        {
          timer: 2000,
        }
      );

      const newUserData = {
        username: userData.username,
        password: userData.password,
      };

      login(newUserData, true);
    } catch (err) {
      swal(
        '',
        'Terjadi kegagalan saat mendaftarkan akun. Silakan untuk mengulangi proses pendaftaran lagi',
        'error'
      );

      console.log(err.response);
    }
  };

  const login = async (loginData, isFromRegister) => {
    try {
      const res = await axios.post(
        'https://adweb-api.herokuapp.com/login',
        loginData
      );

      //console.log(res.data)

      if (!isFromRegister) {
        const bodyNotification =
          'Berhasil masuk dengan akun ' +
          loginData.username +
          '.\nAnda akan dialihkan ke dashboard admin beberapa saat lagi...';

        swal('', bodyNotification, 'success', {
          timer: 2000,
        });
      }

      setTimeout(function () {
        dispatch({ type: 'SET_TOKEN', payload: res.data });
        //window.location.href = '/';
        loadUser();
      }, 2000);
    } catch (err) {
      swal(
        '',
        'Terjadi kegagalan saat masuk. Pastikan akun yang dimasukkan sudah benar',
        'error',
        {
          buttons: ['OK', 'Cancel'],
        }
      );

      console.log(err);
    }
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        isRegistered: state.isRegistered,
        user: state.user,
        error: state.error,
        loadUser,
        register,
        login,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
