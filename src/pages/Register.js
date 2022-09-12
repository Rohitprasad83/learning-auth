import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FirebaseAuthService from '../FirebaseAuthService';
import { useAuth } from '../context/authContext';

function Register() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const { user, setUser } = useAuth();
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await FirebaseAuthService.registerUser(
        credentials.email,
        credentials.password
      );
      setCredentials({ email: '', password: '' });
      FirebaseAuthService.subscribeToAuthChanges(setUser);
      alert('Successfully signed up');
    } catch (error) {
      alert(error.message);
    }
  }

  function changeHandler(e) {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }
  return (
    <div className="container">
      <h2>Register</h2>
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
        <button type="submit" className="button">
          Register
        </button>
        <Link to="/login">Already Having an Account? Login</Link>
      </form>
    </div>
  );
}

export { Register };
