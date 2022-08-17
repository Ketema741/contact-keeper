import React, { useContext } from 'react';
import { Route, Redirect, Navigate  } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import Spinner from '../layout/Spinner'

const PrivateRoute = ({ component: Component, ...rest }) => {
  
  const authState = useContext(AuthContext);
  const { isAuthenticated, loading } = authState;
  
  if (loading) return <Spinner />;
  if (isAuthenticated) return <Component />;
  return <Redirect to='/login' />;

};

export default PrivateRoute;