import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import HomeLayout from './Layout/HomeLayout'
import AddUser from './components/AddUser'
import UserCreat from './Layout/UserCreat'

const router = createBrowserRouter([
  {
    path:"/",
    element:<HomeLayout></HomeLayout>,
    children:[
       {
        index:true,
        element:<AddUser></AddUser>
       }
    ]
  },
  {
    path:"/user",
    element:<UserCreat></UserCreat>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
