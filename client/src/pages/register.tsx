import { Form, useActionData } from 'react-router-dom';

type RegisterActionData =
  | {
      errors: {
        email?: string;
        password?: string;
        _form?: string;
      };
    }
  | undefined;

export default function RegisterPage() {
  const data = useActionData() as RegisterActionData;

  return (
    <div>
      <h2>Register</h2>
      {data ? <div>{data.errors._form}</div> : null}
      <Form method='POST'>
        <div>
          <label htmlFor='email'>Email</label>
          <input id='email' type='email' name='email' />
          {data ? <div>{data.errors.email}</div> : null}
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input id='password' type='password' name='password' />
          {data ? <div>{data.errors.password}</div> : null}
        </div>
        <button type='submit'>Sign up</button>
      </Form>
    </div>
  );
}
