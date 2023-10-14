import React from "react";
import servicedata from './../../configs/Service-Data.json';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import './servicecard.css';



function services({ name,
    image,
    author,
    price,
    description,
    drivename,
    turmscondition,
    symbol
}) {

    return (
        <>
            
            <div className="card-container">
                <img src={image} alt="car image" className=" img-card" />
                <p className="symbol-card"> {symbol} </p>
                <div className="bg-black">
                    <h3 className="heading-card">{name}</h3>
                    <p> RS :  <span className="price-color" >₹{price}</span> <span className="unit-card">per/hr</span> </p>

                    <button className="">view Details </button>
                    <button className="">By Now </button>
                </div>

            </div>
            
        </>

    );
}

export default services