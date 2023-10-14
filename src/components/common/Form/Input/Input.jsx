import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

import Container from './Styles';

export default function Input({ name, ...props }) {
  const { register } = useFormContext();

  return <Container id={name} {...register(name)} {...props} />;
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
};
