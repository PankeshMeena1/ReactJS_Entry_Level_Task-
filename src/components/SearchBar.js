// import React, { useState, useEffect } from 'react';
// import SearchBar from './SearchBar';

// const Search = (city) => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   useEffect(() => {
//     // Fetch products from local storage
//     const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
//     setProducts(storedProducts);
//     setFilteredProducts(storedProducts);
//   }, []);

//   const handleSearch = (searchTerm) => {
//     if (!searchTerm) {
//       setFilteredProducts(products);
//     } else {
//       const filtered = products.filter(product =>
//         product.name.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       setFilteredProducts(filtered);
//     }
//   };

//   return (
//     <div>
//       <SearchBar onSearch={handleSearch} />
//       <div className="product-list1">
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map(product => (
//             <div key={product.id} className="product-item1">
//               <h3>{product.name}</h3>
//               <p>{product.description}</p>
//             </div>
//           ))
//         ) : (
//           <p>No products found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Search;

// const Search=(product)=>{

//   let serches = JSON.parse(localStorage.getItem("reacentSerches")) || [];
//   serches.unshift(product);
//   localStorage.setItem("reacentSerches", JSON.stringify(serches));
//   return serches;
// }

// export default Search;
import React, { useState, useEffect } from 'react';
import Home from '../pages/Home';
import ProductList from './ProductList';

const SearchBar = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Fetch products from local storage
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
    setFilteredProducts(storedProducts); // Initialize filteredProducts with all products
  }, []);

  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setFilteredProducts(products); // Reset to all products if search term is empty
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="app-container">
      <Home onSearch={handleSearch} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default SearchBar;
