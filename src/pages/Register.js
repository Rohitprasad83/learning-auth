import React, { useState } from 'react';

function Register() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(credentials);
  }

  function changeHandler(e) {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }
  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
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
      </form>
    </div>
  );
}

export { Register };
