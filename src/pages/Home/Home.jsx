import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';

import { Form } from '../../components/common';

export default function Home() {
  const createUserSchema = z.object({
    name: z
      .string()
      .nonempty({
        message: 'O nome é obrigatório',
      })
      .trim(),
  });

  const createUserForm = useForm({
    resolver: zodResolver(createUserSchema),
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = createUserForm;
  const onSubmit = (data) => console.log(data);

  return (
    <Form provider={createUserForm} onSubmit={handleSubmit(onSubmit)}>
      <Form.Field>
        <Form.Label htmlFor="name">Nome</Form.Label>
        <Form.Input name="name" />
        <Form.ErrorMessage field="name" />
      </Form.Field>
      <button type="submit" disabled={isSubmitting}>
        Submeter
      </button>
    </Form>
  );
}
