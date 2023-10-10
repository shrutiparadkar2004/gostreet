import { createBrowserRouter, RouterProvider } from "react-router-dom"

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './views/Home/Home';
import About from './views/About/About';
import Adminlogin from './views/Adminlogin/Adminlogin';
import Blocks from './views/Blog/Blog';
import Review from './views/Review/Review';
import Userlogin from './views/Userlogin/Userlogin';
import Services from './views/Services/Services';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/review",
    element: <Review/>,
  },
  {
    path:"/services",
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
  
{
  path:"/navbar",
  element: <Navbar/>,
},
  
{
  path:"/footer",
  element: <Footer/>,
},

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />)




