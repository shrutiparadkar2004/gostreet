  import React, { useState } from 'react';
  import { Link, useNavigate } from 'react-router-dom';
  import showToast from "crunchy-toast";
  import './Adminlogin.css';
  import Navbar from "./../../components/Navbar/Navbar";
  import Footer from "./../../components/Footer/Footer";

    

// import { Link, useNavigate } from 'react-router-dom';
// import showToast from 'Crunchy-toast';
// import { Link, } from 'react-router-dom';
// import Navbar from "./../../components/Navbar/Navbar";
// import Footer from "./../../components/Footer/Footer";
 

function Adminlogin() {


    const[ showPopup]= useState("hide")

    const popup = () => {
        showPopup ("login-popup")
        setTimeout (() => showPopup ("hide"),3000)
    }

return (
  <>
  <Navbar/>
  
   <div class="contanier">
        <h1 className='title' onClick={popup}> Sign Up</h1>
        <form>
            <div> 
                <p class="label"> Username:</p>
                <input 
                type='text' className='username'
                />
            
            </div>
            <div>
                <p class="label"> Password:</p>
                <input
                className='password'
                />
            
            </div>
            <div>
                <p class="label"> Confirm password</p>
               <input className='password'/>
            </div>
            <br/>
            <div >
            <button class="register-btn"> Sign Up</button>
            </div>

            <div className='message'>
              Already have an Account ? 
              <Link to ={'/Userlogin'}  className='message'>Login</Link>
            </div>

        </form>

        </div>
    <Footer/> 
  </>
)
}

export default Adminlogin