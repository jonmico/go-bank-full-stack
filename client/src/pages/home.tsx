import { Form, useActionData, useLoaderData } from 'react-router-dom';

interface User {
  userId: number;
  email: string;
}

interface UserLoaderData {
  message: string;
  users: User[];
}

interface ActionDataError {
  email?: string;
  password?: string;
}

export default function Home() {
  const data = useLoaderData() as UserLoaderData;
  const actionData = useActionData() as ActionDataError;

  console.log(actionData);

  return (
    <div>
      {actionData?.data ? actionData?.data.example : null}
      <h2>This is the home page.</h2>
      {data.users.map((u) => (
        <div key={u.userId}>{u.email}</div>
      ))}
      <h2>This is a form to create a new user</h2>
      <Form method='POST'>
        <div>
          <label htmlFor='email'>Email</label>
          <input name='email' type='email' id='email' />
          {actionData?.email ? <div>{actionData.email}</div> : null}
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input name='password' id='password' type='password' />
          {actionData?.password ? <div>{actionData.password}</div> : null}
        </div>
        <button type='submit'>Submit!</button>
      </Form>
    </div>
  );
}
