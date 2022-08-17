import React, { useState, useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Login = (props) => {
  const alertContext = useContext(AlertContext)
  const authContext = useContext(AuthContext)

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const {  email, password } = user;
  const { setAlert } = alertContext
  const { login, error, clearErrors, isAuthenticated } = authContext

  
  useEffect(() => {
    if(isAuthenticated){
      props.history.push('/')
    }
    if(error === "User already exists"){
      setAlert(error, 'danger')
      clearErrors()
    }

    // eslint-disable-next-line
  }, [error, isAuthenticated,  props.history])


  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if( email === '' || password === ''){
      setAlert('Please fill all field', 'danger')
    }
    else {
     login({ email, password,  })
    }
    
  };

//   if (isAuthenticated) return <Navigate to='/' />;

  return (
    <div className='form-container'>
      <h1>
        Account <span className='text-primary'>Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        
        
        <div className='form-group'>
          <label htmlFor='email'>Email Address</label>
          <input
            id='email'
            type='email'
            name='email'
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            name='password'
            value={password}
            onChange={onChange}
            required
            minLength='6'
          />
        </div>
       
        <input
          type='submit'
          value='Login'
          className='btn btn-primary btn-block'
        />
      </form>
    </div>
  );
};

export default Login;