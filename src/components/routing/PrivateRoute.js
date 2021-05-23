import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;
  return (
    <div>
      <Route
        {...rest}
        render={props =>
          // isAuthenticated && !loading? (
          // temporary turn off authentication before go to dashboard
          !isAuthenticated && !loading ? (
          // end temporary turn off authentication before go to dashboard
            <Redirect to='/login' />
          ) : (
            <Component {...props} />
          )
        }
      />
    </div>
  );
};

export default PrivateRoute;
