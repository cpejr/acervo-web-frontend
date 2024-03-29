import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

import Container from './Styles';

function get(obj, path) {
  const travel = (regexp) =>
    String.prototype.split
      .call(path, regexp)
      .filter(Boolean)
      .reduce(
        (res, key) => (res !== null && res !== undefined ? res[key] : res),
        obj
      );

  const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
  return result;
}

export default function ErrorMessage({ field }) {
  const {
    formState: { errors },
  } = useFormContext();

  const fieldError = get(errors, field);
  if (!fieldError) return null;

  return (
    <Container className="text-xs text-red-500 mt-1">
      {fieldError.message?.toString()}
    </Container>
  );
}

ErrorMessage.propTypes = {
  field: PropTypes.string.isRequired,
};
