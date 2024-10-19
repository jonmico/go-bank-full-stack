import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './app-layout';
import Home from './pages/home';
import LoginPage from './pages/login';
import { loginAction } from './actions/login';
import RegisterPage from './pages/register';
import { registerAction } from './actions/register';

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
      {
        path: 'register',
        element: <RegisterPage />,
        action: registerAction,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
