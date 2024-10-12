import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './app-layout';
import Home from './pages/home';

interface User {
  userId: number;
  email: string;
}

async function homeLoader() {
  const res = await fetch('http://localhost:3000');
  const data: { message: string; users: User[] } = await res.json();

  return data;
}

async function homeAction() {
  const res = await fetch('http://localhost:3000/register', {
    method: 'POST',
    body: JSON.stringify({
      Email: 'testemail@gmail.com',
      Password: 'notsecure',
    }),
  });

  const data: { message: string; user: { ID: string; Email: string } } =
    await res.json();

  return data;
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
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
