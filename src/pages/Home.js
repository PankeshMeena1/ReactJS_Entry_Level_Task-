import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = ({ onSearch = () => {} }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.setItem("isAdmin", false);
    toast.success("Logout");
    navigate('/login');
  };

  const handleAddProduct = () => {
    navigate('/add-product');
  };

  const handleProductDetail = () => {
    navigate('/product-detail');
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    if (typeof onSearch === 'function') {
      onSearch(searchTerm.trim());
    // Trim whitespace from search term
    }
  };


  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="navbar-left">
          <button className="nav-button" onClick={handleAddProduct}>Add Product</button>
          <button className="nav-button" onClick={handleProductDetail}>Product Detail</button>
        </div>
        <div className="navbar-center">
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            className="search-bar"
            placeholder="Search Product Name..."
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className="navbar-right">
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      </nav>
      <div className="content">
        <h1>Welcome to the Home Page</h1>
        <p>This is where your main content will go.</p>
      </div>
    </div>
  );
};

export default Home;
