import { Form } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div>
      <h2>This is the Login Page!</h2>
      <h3>This is a dummy form to trigger the loginAction.</h3>
      <Form method='POST'>
        <button type='submit'>Trigger loginAction.</button>
      </Form>
    </div>
  );
}
