import { handleFetch } from '../utils/handleFetch';

export function login() {
  // TODO: Write this
}

export async function register(email: string, password: string) {
  const data = await handleFetch<{
    message: string;
    userData: { userId: number; email: string };
  }>(() =>
    fetch('http://localhost:3000/register', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  );

  return data;
}
