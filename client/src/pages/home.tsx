import { useLoaderData } from 'react-router-dom';

interface User {
  userId: number;
  email: string;
}

export default function Home() {
  // FIXME: How do we type this data?
  const data: { message: string; users: User[] } = useLoaderData();
  console.log(data.message, data.users);

  return (
    <div>
      <h2>This is the home page.</h2>
      {data.users.map((u) => (
        <div key={u.userId}>{u.email}</div>
      ))}
    </div>
  );
}
