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

  const email = formData.get('email');
  const password = formData.get('password');

  try {
    const res = await fetch('http://localhost:3000/register', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      errors.errors._form = errorData;

      return errors;
    }

    const data = await res.json();

    console.log(data);

    return null;
  } catch (err: unknown) {
    if (err instanceof Error) {
      errors.errors._form = err.message;

      return errors;
    } else {
      errors.errors._form = 'Something went wrong.';

      return errors;
    }
  }
}
