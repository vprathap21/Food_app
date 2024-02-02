import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurentMenu from "./components/RestaurentMenu";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Collections from "./components/Collections";
import Login from "./components/Login";
import Footer from "./components/Footer";
const Applayet = () => {
  return (
    <Provider store={appStore}>
      <div className="app flex flex-col h-screen bg-gray-50 font-serif box-border">
        <Header />
        <Outlet />
        <Footer/>
      </div>
    </Provider>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayet />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/restaurent/:id",
        element: <RestaurentMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/collection/:id",
        element: <Collections />,
      },
    ],
    
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <Error />,
  },
 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
