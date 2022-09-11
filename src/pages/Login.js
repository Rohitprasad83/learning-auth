import React, { useState } from 'react';

function Login() {
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
        <button type="submit" className="button">
          Login
        </button>
      </form>
    </div>
  );
}

export { Login };
