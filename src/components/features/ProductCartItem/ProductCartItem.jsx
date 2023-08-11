import React, { useState } from 'react';

import PropTypes from 'prop-types';

import {
  Container,
  ProductItem,
  ProductImage,
  ProductDescription,
  ProductCount,
} from './styles';

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
    <Container>
      <ProductItem>
        <ProductImage>
          <img
            src={product.image}
            alt={product.title} // MUST BE UNIQUE
          />
        </ProductImage>
        <ProductDescription>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
        </ProductDescription>
      </ProductItem>
      <ProductCount>
        <button type="button" onClick={decrement}>
          -
        </button>
        <p>{count}</p>
        <button type="button" onClick={increment}>
          +
        </button>
      </ProductCount>
    </Container>
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
