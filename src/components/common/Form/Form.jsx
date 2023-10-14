import PropTypes from 'prop-types';
import { FormProvider } from 'react-hook-form';

import ErrorMessage from './ErrorMessage/ErrorMessage';
import Field from './Field/Field';
import Input from './Input/Input';
import Label from './Label/Label';
import Container from './Styles';

export default function Form({ provider, ...props }) {
  return (
    <FormProvider {...provider}>
      <Container {...props} />
    </FormProvider>
  );
}

Form.Field = Field;
Form.Label = Label;
Form.Input = Input;
Form.ErrorMessage = ErrorMessage;

Form.propTypes = {
  provider: PropTypes.object.isRequired,
};
