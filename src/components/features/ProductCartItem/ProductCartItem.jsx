import React, { useState } from 'react';

import PropTypes from 'prop-types';

function ProductCartItem({ product }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-description">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
      </div>
      <div className="product-count">
        <button type="button" onClick={increment}>
          +
        </button>
        <p>{count}</p>
        <button type="button" onClick={decrement}>
          -
        </button>
      </div>
    </div>
  );
}

ProductCartItem.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCartItem;
