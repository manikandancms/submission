import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import ProductLayout from "./components/ProductLayout/ProductLayout";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import ImageComponents from "./components/ImageComponents/ImageComponents";
import Counter from "./components/Counter/Counter";
import Comment from "./components/Comment/Comment";
import Error from "./components/Error/Error";
import ComponentA from "./components/Demo_Coponents/ComponentA";

import "./style.css";

// Layout Component - Contains Header, Footer, and <Outlet /> for nested routes
const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

// Home Page - Contains Hero Section and Product Layout
const Home = () => {
  return (
    <>
      <HeroSection />
      <ProductLayout />
    </>
  );
};

// Router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/counter",
        element: <Counter />,
      },
      {
        path: "/comment",
        element: <Comment />,
      },
      {
        path: "/products",
        element: <ProductLayout />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
      {
        path: "/images",
        element: <ImageComponents />,
      },
      {
        path: "/component-a",
        element: <ComponentA />,
      }
    ],
  },
]);

// Render the App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
