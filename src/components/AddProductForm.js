import React, { useState } from 'react';
import { toast } from 'react-toastify';
import './AddProductForm.css';
import { useNavigate } from 'react-router-dom';

const AddProductForm = () => {

    const navi = useNavigate()
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const handleAddProduct = () => {
        const products = JSON.parse(localStorage.getItem('products')) || [];
        const productExists = products.some(product => product.name === name);

        if (!productExists) {
            products.push({ name, price });
            localStorage.setItem('products', JSON.stringify(products));
            setName('');
            setPrice('');
            toast.success("Add Product Succsefull")
            navi('/home')

        } else {
            alert('Product already exists!');
        }
    };

    return (
        <>
            <div className="add-product-form">
                <h3>Add Product</h3>
                <div className="form-group">
                    <label>Product Name:</label>
                    <input
                        type="text"
                        placeholder="Enter product name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Product Price:</label>
                    <input
                        type="number"
                        placeholder="Enter product price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <button className="add-button" onClick={handleAddProduct}>Add Product</button>
            </div>
        </>
    );
};

export default AddProductForm;
