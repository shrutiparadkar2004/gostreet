import React , {useState} from "react";
import "./Userlogin.css"
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './Userlogin.css';
function Userlogin() {
    return (
        <>

            <div>
                Userlogin Page
            </div>

        </>
    )
}*/

//import React , {useState} from "react";

<Navbar/>


const Userlogin = () => {

    const[popupStyle, showPopup]= useState("hide")

    const popup = () => {
        showPopup ("login-popup")
        setTimeout (() => showPopup ("hide"),3000)
    }
    return (
        <div className="cover">
         <h1>Login</h1>
         <input type="text" placeholder="username" />
         <input type="password" placeholder="password" />

        <div className="login-btn" onClick={popup}>Login</div>
        <p className="text">Or login using</p>

        <div className="alt-login">
           <div className="facebook"></div>
           <div className="google"></div>
        </div>

        <div className={popupStyle}>
            <h3>Login Failed</h3>
            <p>Username or password incorrect</p>
        </div>

    </div>
    )
}

     <Footer/>

export default Userlogin