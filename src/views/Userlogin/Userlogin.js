



import React , {useEffect, useState} from "react";
// import React , {useState} from "react";
import "./Userlogin.css"



// import React , {useEffect, useState} from "react";


// import React, {useState} from "react";
import "./Userlogin.css"
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import image from './../../views/Userlogin/image/facebook.png';
import images from './../../views/Userlogin/image/social.png';


import ReactDOM from 'react-dom/client';

import './Userlogin.css';



// import React , {useEffect, useState} from "react";
//import React , {useState} from "react";
import "./Userlogin.css"
// import Footer from "../../components/Footer/Footer";
// import Navbar from "../../components/Navbar/Navbar";

const Userlogin = () => {

    const [datauser, setDatauser] = useState([]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    console.log("username", username);
    console.log("password", password);

    const data = ()=>{
        
        const obj = {
            username : username,
            password : password,
        }
        const temparray = [...datauser,obj]
        setDatauser(temparray)
    //    const storedata =  localStorage.setItem(JSON.stringify(temparray));
       localStorage.setItem('formData', JSON.stringify(temparray));
       
    }

    console.log("datauser" , datauser);
    const[popupStyle, showPopup]= useState("hide")

    const popup = () => {
        showPopup ("login-popup")
        setTimeout (() => showPopup ("hide"),3000)
    }
    return (
        <>
        <Navbar/>
        <div className="cover">
         <h1 className="head">Login</h1>

         <input className="user-input" 
         type="text"
          placeholder="username" 
          value={username}
          onChange={(e)=>{
            setUsername(e.target.value)
          }}
          required
          />

         <input className="user-input" 
          type="password"
          placeholder="password" 
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
          required
          />

        <button className="login-btn"
        >Login</button>
        <p className="text">Or login using</p>

        <div className="alt-login">
           <div className="facebook">
           <img src={image} alt=""  className='icon'/>
           </div>
           <div className="google">
           <img src={images} alt=""  className='icon2'/>
           </div>
        </div>

        {/*<div>
            <h3>Login successfull!</h3>
            <p>Username & password valid</p>
    </div>*/}

    </div>

    <Footer/>

        </>
    )
}

export default Userlogin