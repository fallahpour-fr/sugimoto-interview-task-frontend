import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/OptionsSelector.css';

const OptionsSelector = () => {
  const location = useLocation();
    const { product } = location.state || {};
    const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    

  if (!product) {
    return <div>Product not found.</div>; 
  }
  
  const handleSizeChange = (size) => setSelectedSize(size);
  const handleColorChange = (color) => setSelectedColor(color);

  return (
    <div className="options_selector_container">
      <div className="product_details">
        <p>Selected Size: {selectedSize}</p>
        <p>Selected Color: {selectedColor}</p>
      </div>

      {/* Size Selector */}
      <div className="option_section">
        <label>Size:</label>
        <div className="option_buttons">
          {product.sizes.map((size) => (
            <button
              key={size}
              className={`option_button ${size === selectedSize ? 'selected' : ''}`}
              onClick={() => handleSizeChange(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Color Selector */}
      <div className="option_section">
        <label>Color:</label>
        <div className="option_buttons">
          {product.colors.map((color) => (
            <button
              key={color}
              className={`option_button ${color === selectedColor ? 'selected' : ''}`}
              onClick={() => handleColorChange(color)}
              style={{ backgroundColor: color }}
            >
              {color}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OptionsSelector;
