
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://reqres.in/api/login', formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      localStorage.setItem('authToken', response.data.token);
      console.log(response.data);
      toast.success("Login Succesfull")
      navigate("/home");

    } catch (error) {
      console.error(error);
      alert("Login failed!");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      navigate('/home');
    }
  }, [navigate]);

  return (
    <>
    <div className="login-container">
      <form className="login-form" onSubmit={handleFormSubmit}>
        <h2>Login</h2>
        <div className="form-group1">
          <label>Email</label>
          <input 
            type="email" 
            placeholder="Email"
            required 
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group1">
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            required
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    </>
  );
};

export default Login;
