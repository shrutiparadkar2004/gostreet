<<<<<<< HEAD
import React , {useState} from "react";
import "./Userlogin.css"
=======

import React , {useEffect, useState} from "react";
>>>>>>> 1017bbb424538761e8627cf07d600444175ad8a7
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";


import ReactDOM from 'react-dom/client';

import './Userlogin.css';


      

<<<<<<< HEAD
//import React , {useState} from "react";

<Navbar/>

=======
>>>>>>> 1017bbb424538761e8627cf07d600444175ad8a7

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
    // const[popupStyle, showPopup]= useState("hide")

    // const popup = () => {
    //     showPopup ("login-popup")
    //     setTimeout (() => showPopup ("hide"),3000)
    // }
    return (
        <>
        <Navbar/>
        <div className="cover">
         <h1>Login</h1>

         <input type="text"
          placeholder="username" 
          value={username}
          onChange={(e)=>{
            setUsername(e.target.value)
          }}
          required
          />

         <input type="password"
          placeholder="password" 
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
          required
          />

        <button className="login-btn"
        onClick={()=>{
            data()
        }}
        >Login</button>
        <p className="text">Or login using</p>

        <div className="alt-login">
           <div className="facebook"></div>
           <div className="google"></div>
        </div>

        <div>
            <h3>Login Failed</h3>
            <p>Username or password incorrect</p>
        </div>

    </div>

        </>
    )
}

export default Userlogin