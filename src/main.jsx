import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './Components/Shop/Shop';
import Home from './Components/Layout/Home';
import Order from './Components/Order/Order';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import loadcart from './LoadProduct/LoadProduct';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home></Home>,
    children:[
      {
        path:"/",
        element:<Shop></Shop>
      },
      {
        path:"orders",
        element:<Order></Order>,
        loader: loadcart
      },
      {
        path: "inventory",
        element:<Inventory></Inventory>
      },
      {
        path: "login",
        element:<Login></Login>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider
    router={router}
    ></RouterProvider>
  </React.StrictMode>,
)
