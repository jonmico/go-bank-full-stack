import { useEffect, useState } from 'react';
import { GlobalStyles } from './styles/global-styles';
import styled from 'styled-components';
import Header from './components/header';

const AppContainer = styled.div`
  width: 80%;
  margin: auto;
`;

const AppLayout = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-areas:
    'nav'
    'body';
`;

interface User {
  userId: number;
  email: string;
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
    <>
      <GlobalStyles />

      <AppLayout>
        <Header />
        <AppContainer>
          {error ? <div>Error: {error}</div> : null}
          {users ? (
            <div>
              {users.map((u) => (
                <div key={u.userId}>{u.email}</div>
              ))}
            </div>
          ) : null}
        </AppContainer>
      </AppLayout>
    </>
  );
}
