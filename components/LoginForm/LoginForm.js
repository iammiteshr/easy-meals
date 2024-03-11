"use client"; // This is a client component 👈🏽
// pages/login.js
import { useState } from 'react';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call your login function here, passing the username and password
    // const success = await login(username, password);

    //using success as api call
    if (true) {
      window.location.href = '/list';
    } else {
      // Handle failed login
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label className="form-label">
          Username:
          <input
            className="form-input"
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
        </label>
        <br />
        <label className="form-label">
          Password:
          <input
            className="form-input"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <button className="form-button" type="submit">Login</button>
      </form>

      <style jsx>{`
        .container {
          max-width: 400px;
          margin: 0 auto;
        }

        h1 {
          text-align: center;
        }

        .form-label {
          display: block;
          margin-bottom: 8px;
        }

        .form-input {
          width: 100%;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 14px;
        }

        .form-button {
          display: block;
          margin-top: 16px;
          padding: 8px 16px;
          background-color: #0070f3;
          color: #fff;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
        }

        .form-button:hover {
          background-color: #0058c5;
        }
      `}</style>
    </div>
  );
}
