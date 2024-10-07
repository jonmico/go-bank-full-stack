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

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: homeLoader,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
