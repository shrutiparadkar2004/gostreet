import React from "react";
import servicedata from './../../configs/Service-Data.json';
import './servicecard.css';


function services({name, 
image,
author,
price,
description,
drivename,
turmscondition}){

    return (
        
        <div className="card-container">
            <img src={image} alt="car image" className=" img-card" />

            <h3 className="heading-card">{name}</h3>
            <h3> RS <span>₹{price}</span> <span className="unit-card">per/hr</span> </h3>

            {/* <button className="">view Details </button>
            <button className="">By Now </button> */}
        </div>
        
    );
}

export default services