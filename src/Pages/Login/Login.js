import React, { useState } from 'react';
import './Login.css';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { LoginUserApi } from '../../Components/userApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const token = await LoginUserApi(email, password);
      if (token) {
        localStorage.setItem('token', token);
        console.log('Token:', token);
        toast.success("logined successfully ", {
          position: "top-right",
          autoClose: 3000
        });
        navigate('/');
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
      console.error('Login error:', error);
    }
  };

  return (
    <div className="login-container">
      <h1>Enter your email to join us or sign in.</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <p className="login-info">Email</p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <p className="login-info">Password</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <p>By continuing, I agree to Nike's Privacy Policy and Terms of Use.</p>
        <div className="login-button-container">
          <Button type="submit" className="login-button">Sign In</Button>
          <ToastContainer />
        </div>
        <Link to="/signup">Don't have an account? Sign Up</Link>
      </form>
    </div>
  );
}

export default Login;