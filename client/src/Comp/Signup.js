import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CSS/Signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
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

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/signup', formData);
      // Handle response here (e.g., show a success message)
      if(response.data ===400){
        window.alert("user exists");
      }else if(response.data===500){
        window.alert("Error Occured")
      }else if(response.data === 201){
        window.alert("Signup Successful");
          navigate('/login');
      }
      
    } catch (error) {
      // Handle error here (e.g., show an error message)
      window.alert("Error Occured");
    }
  };

  return (
    <div className="signup-container">
      <h1 className="signup-heading">Sign Up Page</h1>
      <form className="signup-form" onSubmit={handleSignup}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="input"
          value={formData.username}
          required={true}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input"
          value={formData.email}
          required={true}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input"
          required={true}
          value={formData.password}
          onChange={handleInputChange}
        />
        <div className="button-group">
          <button type="submit" className="button signup-button">
            Sign Up
          </button>
          <button type="button" className="button login-button">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
