import React from "react";
import servicedata from './../../configs/Service-Data.json';
import BookNowForm from "./../BookNowForm/BookNowForm";


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
            
            <div className="card-container1">
                <img src={image} alt="car image" className=" img-card" />
                <div className="tect-cen">
                {/* <p className="symbol-card"> {symbol} </p> */}
                <img className="symbol-card"  src={symbol} alt="icom" />
                </div>
                <div className="bg-black">
                    <h3 className="heading-card">{name}</h3>
                    <p className="price"> RS :  <span className="price-color" >₹{price}</span> <span className="unit-card">per/hr</span> </p>

                    {/* <button className="btn-card">view Details </button>
                    <button className="btn-card">By Now </button> */}
                    <BookNowForm/>
                </div>

            </div>
            
        </>

    );
}

export default services