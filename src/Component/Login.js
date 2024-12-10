import React, { useState } from 'react';
import './Login.css';
import {login} from "../api/index";
const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e){
    e.preventDefault();
    setError('');

    // This is a mock login function. In a real application, you would call an API here.
    if (email  && password ) {
      let res = await login({email,password})
      if(res.success) {
        props.setIsLoggedIn(true);
        props.setUserData(res.user.email);

      }else{
        setError('Invalid email or password');
      }
      // Here you would typically set the user in your app's state and redirect
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;

