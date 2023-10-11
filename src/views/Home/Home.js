
 
 import React from 'react';
 import ReactDOM from 'react-dom/client';
 import Servicecard from './../../components/Servicecard/Servicecard';
 import './Home.css';
 function Home() {
     return (
         <>
 
             <div>
                 Home Page
             </div>

             <Servicecard/>
 
         </>
     )
 }
 
 export default Home

import React from 'react';
import ReactDOM from 'react-dom/client';


import "./Home.css";
import Navbar from "./../../components/Navbar/Navbar";
import Footer from "./../../components/Footer/Footer";

export default function Home()
{
    return (
        <>
        <div className="home-container">
            <Navbar/>
            
           
            <Footer/>
        </div>
        </>
    )
}

