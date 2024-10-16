import { redirect } from 'react-router-dom';

interface ActionResponse {
  error: {
    email?: string;
    password?: string;
  };
}

export async function loginAction({ request }: { request: Request }) {
  const formData = await request.formData();

  const email = formData.get('email');
  const password = formData.get('password');

  const actionResponse: ActionResponse = { error: {} };

  if (!email) {
    actionResponse.error.email = 'Please provide an email.';
  }

  if (!password) {
    actionResponse.error.password = 'Please provide a password.';
  }

  if (actionResponse.error.email || actionResponse.error.password) {
    return actionResponse;
  }

  return redirect('/');
}
