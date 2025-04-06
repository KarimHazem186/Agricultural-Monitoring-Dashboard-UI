import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Account = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const [registerData, setRegisterData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here, e.g., API request
    console.log('Login data:', loginData);
    // Redirect after successful login
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here, e.g., API request
    console.log('Register data:', registerData);
    // Redirect after successful registration
  };

  return (
    <section className="login-register section-lg">
      <h1 style={{ color: 'white', marginBottom: '20px' }}>Account Page</h1>
      <div className="login-register-container container grid">
        <div className="login">
          <h3 className="section-title" style={{ letterSpacing: '2px' }}>Login</h3>
          <form action="" className="form grid" onSubmit={handleLoginSubmit} noValidate>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-input"
              id="log_email"
              value={loginData.email}
              onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
              aria-label="Email"
            />
            <input
              type="password"
              placeholder="Enter Password"
              className="form-input"
              id="log_password"
              value={loginData.password}
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              aria-label="Password"
            />
            <div className="form-btn">
              <button type="submit" className="btn" id="login">Login</button>
            </div>
          </form>
        </div>

        <div className="login">
          <h3 className="section-title" style={{ letterSpacing: '2px' }}>Create an Account</h3>
          <form action="" className="form grid" onSubmit={handleRegisterSubmit} noValidate>
            <input
              type="text"
              placeholder="Enter Username.."
              className="form-input"
              id="username"
              value={registerData.username}
              onChange={(e) => setRegisterData({ ...registerData, username: e.target.value })}
              aria-label="Username"
            />
            <input
              type="email"
              placeholder="Enter Email.."
              className="form-input"
              id="email"
              value={registerData.email}
              onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
              aria-label="Email"
            />
            <input
              type="password"
              placeholder="Enter Password.."
              className="form-input"
              id="password"
              value={registerData.password}
              onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
              aria-label="Password"
            />
            <input
              type="password"
              placeholder="Confirm Password.."
              className="form-input"
              id="confirmPassword"
              value={registerData.confirmPassword}
              onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
              aria-label="Confirm Password"
            />
            <div className="form-btn">
              <button type="submit" className="btn" id="register">Register</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Account;
