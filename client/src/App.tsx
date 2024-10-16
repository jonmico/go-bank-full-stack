import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './app-layout';
import Home from './pages/home';
import LoginPage from './pages/login';
import { loginAction } from './actions/login';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
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
