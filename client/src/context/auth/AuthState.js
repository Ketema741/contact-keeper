import React, { useReducer, useContext, useEffect } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from '../types';

const AuthState = (props) => {
    const initialState = {
      user:null,
      token:localStorage.getItem('token'),
      isAuthenticated: null,
      loading:true,
      error:null,
    };
  
    const [state, dispatch] = useReducer(authReducer, initialState);
    
    
  // Register User
  const register = async (formData) => {
    const config = {
      headers:{
        "Content-Type":'application/json'
      }
    }

    try {
      const res = await axios.post ('http://localhost:5000/api/users', formData, config)
      dispatch ({
        type:REGISTER_SUCCESS,
        payload:res.data
      })
      loadUser()
    } catch(err) {
      dispatch ({
        type:REGISTER_FAIL,
        payload:err.response.data.msg
      })
    }

  }

  // login user
  const login = async (formData) => {
    const config = {
      headers:{
        "Content-Type":'application/json'
      }
    }

    try {
      const res = await axios.post ('http://localhost:5000/api/auth', formData, config)
      
      dispatch ({
        type:LOGIN_SUCCESS,
        payload:res.data
      })


      loadUser()
    } catch(err) {
      dispatch ({
        type:LOGIN_FAIL,
        payload:err.response.data.msg
      })
    }

  }


   // logout 
   const  logout = () => dispatch({ type: LOGOUT })

  

   // load user
   const  loadUser = async () => {
    if(localStorage.token) {
      setAuthToken(localStorage.token)
    }
    const res = await axios.get('http://localhost:5000/api/auth')
   
    try {
      dispatch ({
        type: USER_LOADED,
        payload: res.data
      })

    } catch(error) {
      dispatch ({
        type: AUTH_ERROR
      })
    }
   }

   const clearErrors = () => dispatch({ type: CLEAR_ERRORS })
   
   useEffect(() => {
    setAuthToken(state.token);
  }, [state.token]);
    return (
      <AuthContext.Provider value={{
 
        user: state.user,
        error: state.error,
        isAuthenticated: state.isAuthenticated,
        register,
        login,
        logout,
        loadUser,
        clearErrors,
        
      }}>

        {props.children}
      </AuthContext.Provider>
    )
  }
export default AuthState;