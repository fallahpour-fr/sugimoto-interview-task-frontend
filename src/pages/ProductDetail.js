import React from 'react';
import '../styles/ProductDetail.css';
import OptionsSelector from "./OptionsSelector";
import Reviews from './Reviews';
import { useLocation } from 'react-router-dom';

const ProductDetail = () => {
  const location = useLocation(); // Get location object
  const { product } = location.state || {}; // Retrieve product data from state

  if (!product) {
    return <div>Product not found.</div>; // Handle case where product is not found
  }
  return (
    <div className="product_container">
      <div className="product_item product_item_img">
        <img src={product.img} alt={product.title} />
      </div>
      <div className="product_item">
        <div className="product_item product_info">
          <p className="product_item product_item_title">{product.title}</p>
          <p className="product_item product_item_description">{product.description || "No description available."}</p>
          <p className="product_item product_item_rate">Rating: {product.rate} ★</p>
        </div>
        <OptionsSelector/>
      </div>
      <Reviews />
    </div>
  );
};

export default ProductDetail;

