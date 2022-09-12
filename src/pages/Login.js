import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FirebaseAuthService from '../FirebaseAuthService';
import { useAuth } from '../context/authContext';

function Login() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const { user, setUser } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await FirebaseAuthService.loginUser(
        credentials.email,
        credentials.password
      );
      setCredentials({ email: '', password: '' });
      FirebaseAuthService.subscribeToAuthChanges(setUser);
      alert('Successfully Logged In');
    } catch (error) {
      alert(error.message);
    }
  }

  function changeHandler(e) {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  async function loginWithGoogle() {
    try {
      await FirebaseAuthService.loginWithGoogle();
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="email"
          placeholder="enter email"
          name="email"
          onChange={changeHandler}
          value={credentials.email}
          className="input-field"
        />
        <input
          type="password"
          placeholder="enter password"
          name="password"
          onChange={changeHandler}
          value={credentials.password}
          className="input-field"
        />
        <Link to="/reset">Forgot Password?</Link>
        <button type="submit" className="button">
          Login
        </button>
        <button type="button" className="button" onClick={loginWithGoogle}>
          Login Using Google
        </button>
        <Link to="/register">Create an account? Sign up</Link>
      </form>
    </div>
  );
}

export { Login };
