
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import AddProductForm from "./components/AddProductForm";
import ProductList from "./components/ProductList";
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <Router>
      <Routes>
       
        <Route path="/home" element={<Home />} />
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-product" element={<AddProductForm />} />
        <Route path="/product-detail" element={<ProductList />} />
        <Route path="/search" element={<SearchBar />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
