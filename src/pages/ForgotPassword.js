import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FirebaseAuthService from '../FirebaseAuthService';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await FirebaseAuthService.sendPasswordResetEmail(email);
      setEmail('');
      alert('Successfully Sent Reset Password Link');
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="container">
      <h2>Enter your Email to reset Password</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="email"
          placeholder="enter email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="input-field"
        />

        <button type="submit" className="button">
          Reset Password
        </button>

        <Link to="/login">Login to your account? Sign in</Link>
      </form>
    </div>
  );
}

export { ForgotPassword };
