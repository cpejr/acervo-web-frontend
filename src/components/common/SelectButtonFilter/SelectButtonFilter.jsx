import PropTypes from 'prop-types';

import { SelectButton } from './Styles';

export default function SelectButtonFilter({ active, onClick }) {
  return <SelectButton active={active} onClick={onClick} />;
}
SelectButtonFilter.defaultProps = {
  active: false,
  onClick: () => {},
};

SelectButtonFilter.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
};
