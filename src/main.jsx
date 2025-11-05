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
import terms from './components/terms/Terms.jsx';
import privacy from './components/Privacy/Privacy.jsx';
import ErrorPage from '../src/components/Error page/Error.jsx';
import ToyDetailed from './components/Detailed/ToyDetailed.jsx';
import { HelmetProvider } from 'react-helmet-async';
import ReactDOM from 'react-dom';



const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
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
      {
        path: "terms",
        Component: terms,
      },
      {
        path: "privacy",
        Component: privacy,
      },
      {
        path: "toys/:toyId",
        element: <PrivateRoutes><ToyDetailed></ToyDetailed></PrivateRoutes>,
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
]);





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    </HelmetProvider>
  </StrictMode>,
)
