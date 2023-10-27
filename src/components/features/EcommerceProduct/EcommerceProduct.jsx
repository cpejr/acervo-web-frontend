import PropTypes from 'prop-types';

import { Image, Square } from './styles';

export default function EcommerceProduct({ data }) {
  return (
    <Square>
      <Image src={data?.image} />
      {data?.name}
    </Square>
  );
}

EcommerceProduct.propTypes = {
  data: PropTypes.object.isRequired,
};
