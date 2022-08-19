import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./components/products/ProductDetails";
import AboutUs from "./pages/AboutUs";
import AdminPage from "./pages/AdminPage";
import CartPage from "./pages/CartPage"
import Catalog from "./pages/Catalog";
import EditProductPage from "./pages/EditProductPage";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import ContactUs from "./pages/ContactUs";
import PersonalArea from "./pages/PersonalArea";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import Payment from "./components/payment/Payment";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <Home />,
      id: 1,
    },
    {
      link: "/about",
      element: <AboutUs />,
      id: 2,
    },
    {
      link: "/admin",
      element: <AdminPage />,
      id: 3,
    },
    {
      link: "/cart",
      element: <CartPage />,
      id: 4,
    },
    {
      link: "/edit/:id",
      element: <EditProductPage />,
      id: 5,
    },
    {
      link: "/catalog",
      element: <Catalog/>,
      id: 6,
    },
    {
      link: "/login",
      element: <LoginPage />,
      id: 7,
    },
    {
      link: "/register",
      element: <RegistrationPage />,
      id: 8,
    },
    {
      link: "*",
      element: <NotFoundPage />,
      id: 9,
    },
    {
      link: "/contacts",
      element: <ContactUs />,
      id: 10,
    },
    {
      link: "/personalarea",
      element: <PersonalArea />,
      id: 11,
    },
    {
      link: "/productdetails/:id",
      element: <ProductDetails />,
      id: 12,
    },
    {
      link: "/pay",
      element: <Payment />,
      id: 13,
    },
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
