import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterPage from "./pages/register";
import LoginPage from "./pages/login"
import ErrorPage from "./pages/404.jsx";
import ProductPage from "./pages/products";
import ProfilePage from "./pages/profile";
import DetailProductPage from "./pages/detailProduct";

const router = createBrowserRouter([
  // Array untuk path
  {
    path: "/",
    element: <div>Hello World!</div>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/registrasi",
    element: <div><RegisterPage/></div>,
  },
  {
    path: "/login",
    element: <div><LoginPage/></div>,
  },
  {
    path: "/product",
    element: <div><ProductPage/></div>,
  },
  {
    path: "/profile",
    element: <div><ProfilePage/></div>,
  },
  {
    // Untuk menangkap id menggunakan react router DOM
    path: "/products/:id",
    element: <div><DetailProductPage/></div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
