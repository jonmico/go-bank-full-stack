import { Form, useActionData, useLoaderData } from 'react-router-dom';

interface User {
  userId: number;
  email: string;
}

export default function Home() {
  // FIXME: How do we type this data?
  const data: { message: string; users: User[] } = useLoaderData();
  const actionData = useActionData();

  console.log(actionData);

  return (
    <div>
      {actionData ? actionData.error : null}
      <h2>This is the home page.</h2>
      {data.users.map((u) => (
        <div key={u.userId}>{u.email}</div>
      ))}

      <h2>This is a form to create a new user</h2>
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
