import { zodResolver } from '@hookform/resolvers/zod';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import { Button, StyledForm } from './Styles';
import { createUserSchema } from './utils';

export default function FormTest() {
  const createUserForm = useForm({
    resolver: zodResolver(createUserSchema),
  });
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = createUserForm;
  const onSubmit = (data) => console.log(data);

  return (
    <StyledForm provider={createUserForm} onSubmit={handleSubmit(onSubmit)}>
      <FormField name="name" label="Nome" />
      <FormField name="email" label="Email" />
      <Button type="submit" disabled={isSubmitting}>
        Submeter
      </Button>
    </StyledForm>
  );
}

function FormField({ name, label }) {
  return (
    <StyledForm.Field>
      <StyledForm.Label htmlFor={label}>{label}</StyledForm.Label>
      <StyledForm.Input name={name} />
      <StyledForm.ErrorMessage field={name} />
    </StyledForm.Field>
  );
}
FormField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
