import { Form } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div>
      <h2>This is the Login Page!</h2>

      <Form method='POST'>
        <div>
          <label htmlFor='email'>Email</label>
          <input name='email' type='email' id='email' />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input name='password' id='password' type='password' />
        </div>
        <button type='submit'>Submit!</button>
      </Form>
    </div>
  );
}
