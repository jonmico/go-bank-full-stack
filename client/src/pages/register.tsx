import { Form, useActionData } from 'react-router-dom';

export default function RegisterPage() {
  const data = useActionData();

  console.log(data);
  return (
    <div>
      <h2>Register</h2>
      <Form method='POST'>
        <div>
          <label htmlFor='email'>Email</label>
          <input id='email' type='email' name='email' />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input id='password' type='password' name='password' />
        </div>
        <button type='submit'>Sign up</button>
      </Form>
    </div>
  );
}
