import React from "react";
import Homepage from "./Homepage";
import ShopPage from "./ShopPage";
import CartPage from "./Cartpage";
import ErrorPage from "./ErrorPage";
import App from "../App";

/**
 * Routes configuration for the application using the
 * Data Router approach (createBrowserRouter)
 */
const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "shop",
        element: <ShopPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },
];

export default routes;
