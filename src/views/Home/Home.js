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
