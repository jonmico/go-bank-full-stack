import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './app-layout';
import Home from './pages/home';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
