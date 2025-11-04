import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import App from './App.jsx'
import Root from './Layout/Root.jsx';
import Home from './components/Home/Home.jsx';
import Toys from './components/Toys/Toys.jsx';
import Login from './Login/Login.jsx';
import Register from './Register/Register.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import PrivateRoutes from './Route/PrivateRoutes.jsx';
import ForgotPassword from '../src/components/ForgetPass/ForgotPassword.jsx';
import MyProfile from './components/Profile/MyProfile.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "toys",
        // Component: Toys,
        element: <PrivateRoutes><Toys></Toys></PrivateRoutes>,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "forgotPassword",
        Component: ForgotPassword,
      },
      {
        path: "myProfile",
        element: <PrivateRoutes><MyProfile></MyProfile></PrivateRoutes>,
      },
    ],
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
