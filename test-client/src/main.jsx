import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import HomeLayout from "./Layout/HomeLayout";
import AddUser from "./components/AddUser";
import UserCreat from "./Layout/UserCreat";
import Detlics from "./Layout/Detlics";
import EditeUser from "./components/EditeUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <AddUser></AddUser>,
      },
    ],
  },
  {
    path: "/user",
    element: <UserCreat></UserCreat>,
  },
  {
    path: "/detlics/:id",
    loader: ({ params }) => fetch(`http://localhost:3000/user/${params.id}`),
    element: <Detlics></Detlics>,
  },
  {
    path: "/edit/:id",
    loader: ({ params }) => fetch(`http://localhost:3000/user/${params.id}`),
    element: <EditeUser></EditeUser>
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
