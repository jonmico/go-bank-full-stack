import { redirect } from 'react-router-dom';
import { register } from '../services/api-user';

interface RegisterActionErrors {
  errors: {
    email?: string;
    password?: string;
    _form?: string;
  };
}

export async function registerAction({ request }: { request: Request }) {
  const formData = await request.formData();
  const errors: RegisterActionErrors = { errors: {} };

  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email) {
    errors.errors.email = 'Please provide an email.';
  }

  if (!password) {
    errors.errors.password = 'Please provide a password.';
  }

  if (Object.keys(errors).length) {
    return errors;
  }

  const data = await register(email, password);

  if (data.error) {
    errors.errors._form = data.error.errorMessage;
    return errors;
  }

  return redirect('/');
}
