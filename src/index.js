import React from 'react';
import ReactDOM from 'react-dom/client';
import { Carousel } from 'bootstrap';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import Home from './views/Home/Home';
import About from './views/About/About';
import Adminlogin from './views/Adminlogin/Adminlogin';
import Blocks from './views/Blocks/Blocks';
import Review from './views/Review/Review';
import Userlogin from './views/Userlogin/Userlogin';
import Services from './views/Services/Services';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/review",
    element: <Review/>,
  },
  {
    path:"/service",
    element: <Services/>,
  },
  {
    path:"/blocks",
    element: <Blocks/>,
  },

{
  path:"/adminlogin",
  element: <Adminlogin/>,
},
{
  path:"/userlogin",
  element: <Userlogin/>,
},
  
  
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />)




