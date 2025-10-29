import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import UserDetlise from "./components/UserDetlise.jsx";
import UdeatUser from "./components/UdeatUser.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/userDetlise/:id",
    loader: ({params}) => fetch(`http://localhost:5000/user/${params.id}`),
    Component: UserDetlise,
  },

  {
    path: "/updeat/:id",
     loader: ({params}) => fetch(`http://localhost:5000/user/${params.id}`),
    Component: UdeatUser,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
