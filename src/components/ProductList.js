import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import './ProductList.css';

const ProductList = ({ searchTerm = '' }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
        setProducts(storedProducts);
    }, []);

    // Ensure searchTerm is a string before using toLowerCase()
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDelete = (index) => {
        const updatedProducts = [...products];
        updatedProducts.splice(index, 1);
        setProducts(updatedProducts);
        localStorage.setItem('products', JSON.stringify(updatedProducts));
        toast.success("Delete Succefull")
    };

    return (
        <>
            <div className="product-list">
                <h3>Product List</h3>
                {products.length === 0 ? (
                    <p>No Product Found</p>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredProducts.map((product, index) => (
                                <tr key={index}>
                                    <td>{product.name}</td>
                                    <td>${product.price}</td>
                                    <td>
                                        <button onClick={() => handleDelete(index)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
};

export default ProductList;
