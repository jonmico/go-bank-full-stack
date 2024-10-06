import { useEffect, useState } from 'react';
import { GlobalStyles } from './styles/global-styles';

interface User {
  ID: number;
  Email: string;
  Password: string;
}

export default function App() {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState('');
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    async function getUsers() {
      try {
        const res = await fetch('http://localhost:3000');
        const data: { message: string; users: User[] } = await res.json();

        setUsers(data.users);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Something went wrong.');
          console.log('Something went wrong.');
        }
      } finally {
        setIsFetching(false);
      }
    }
    getUsers();
  }, []);

  if (isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <GlobalStyles />
      <h1>Go Bank!</h1>
      {error ? <div>Error: {error}</div> : null}
      {users ? users.map((u) => <div>{u.Email}</div>) : null}
    </div>
  );
}
