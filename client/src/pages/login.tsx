import { Form, useActionData } from 'react-router-dom';

interface LoginLoaderData {
  error: {
    email?: string;
    password?: string;
  };
}

export default function LoginPage() {
  const actionData = useActionData() as LoginLoaderData | undefined;

  return (
    <div>
      <h2>This is the Login Page!</h2>

      <Form method='POST'>
        <div>
          <label htmlFor='email'>Email</label>
          <input name='email' type='email' id='email' />
          {actionData ? <div>{actionData.error.email}</div> : null}
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input name='password' id='password' type='password' />
          {actionData ? <div>{actionData.error.password}</div> : null}
        </div>
        <button type='submit'>Submit!</button>
      </Form>
    </div>
  );
}

interface ErrorProps {}

function Error() {
  return <div></div>;
}
