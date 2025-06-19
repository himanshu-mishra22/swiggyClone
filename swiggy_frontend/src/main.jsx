import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Offers from "./components/Offers.jsx";
import Help from "./components/Help.jsx";
import SignIn from "./components/SignIn.jsx";
import Body from "./components/Body.jsx";
import Error from "./components/Error.jsx";
import RestaurantDetails from "./components/RestaurantDetails.jsx";
import Carts from "./components/Carts.jsx";

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<Error/>,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/offers",
        element: <Offers />
      },
      {
        path: "/help",
        element: <Help />
      },
      {
        path: "/signIn",
        element: <SignIn />
      },
      {
        path: "/restraunts/:id",
        element: <RestaurantDetails />
      },
      {
        path: "/carts",
        element: <Carts/>
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRoutes}></RouterProvider>
);
