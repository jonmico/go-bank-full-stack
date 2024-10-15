import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './app-layout';
import Home from './pages/home';
import LoginPage from './pages/login';
import { loginAction } from './actions/login';

interface User {
  userId: number;
  email: string;
}

async function homeLoader() {
  const res = await fetch('http://localhost:3000');
  const data: { message: string; users: User[] } = await res.json();

  return data;
}

interface Error {
  email?: string;
  password?: string;
}

async function homeAction({ request }: { request: Request }) {
  const formData = await request.formData();
  const errors: Error = {};

  const email = formData.get('email');
  const password = formData.get('password');

  if (!email || typeof email !== 'string') {
    errors.email = 'Email not provided.';
  }

  if (!password || typeof password !== 'string') {
    errors.password = 'Password not provided.';
  }

  if (errors.email || errors.password) {
    return errors;
  }

  const res = await fetch('http://localhost:3000/register', {
    method: 'POST',
    body: JSON.stringify({
      Email: email,
      Password: password,
    }),
  });

  const resData: { message: string; user: { ID: string; Email: string } } =
    await res.json();

  return resData;
}

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: homeLoader,
        action: homeAction,
      },
      {
        path: 'login',
        element: <LoginPage />,
        action: loginAction,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
