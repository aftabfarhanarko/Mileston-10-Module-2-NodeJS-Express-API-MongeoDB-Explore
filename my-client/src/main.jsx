import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import UserDetlise from "./components/UserDetlise.jsx";
import UpDeatUser from "./components/UpDeatUser.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/usersDetlise/:id",
    loader: ({ params }) => fetch(`http://localhost:4000/user/${params.id}`),
    Component: UserDetlise,
  },
  {
    path: "/edit/:id",
    loader: ({ params }) => fetch(`http://localhost:4000/user/${params.id}`),
    Component:UpDeatUser
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
