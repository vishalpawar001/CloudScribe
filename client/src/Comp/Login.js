import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CSS/Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', formData);

      // Handle successful login response (e.g., set user token, navigate to another page)
      if(response.data === 500){
        window.alert("Something went Wrong, try again!");
      }else if(response.data === 401){
        window.alert("Invalid Credentials");
      }else{
          const userId = response.data.userId;
          const token = response.data.token;
          sessionStorage.setItem('userId', userId);
          sessionStorage.setItem('token', token);
          navigate("/notes");
      }
    } catch (error) {
      // Handle login error (e.g., show an error message)
      console.error('Login error:', error);
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-heading">Login Page</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input"
          value={formData.password}
          onChange={handleInputChange}
        />
        <div className="button-group">
          <button type="submit" className="button login-button">
            Login
          </button>
          <button type="button" className="button forgot-button">
            Forgot Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
