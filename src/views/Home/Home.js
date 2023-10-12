import React from 'react';

 import ReactDOM from 'react-dom/client';
 import Navbar from "./../../components/Navbar/Navbar";
 import Footer from "./../../components/Footer/Footer";
 
 import './Home.css';
 function Home() {
     return (
         <>
           <Navbar/>
     
           <h1 className="body-div">Home Page</h1>

             <Footer/>
 
         </>
     )
 }
 
export default Home;




