import React, { useState } from 'react';
import './Adminlogin.css';
import { Link, } from 'react-router-dom';

function Adminlogin() {

    const[ showPopup]= useState("hide")

    const popup = () => {
        showPopup ("login-popup")
        setTimeout (() => showPopup ("hide"),3000)
    }

return (
  <>
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
            <div className='button'>
            <button class="register-btn"> Sign Up</button>
            </div>

            <div className='message'>
              Already have an Account ? 
              <Link to ={'/Userlogin'}  className='message'>Login</Link>
            </div>

        </form>

        </div>

  </>
)
}

export default Adminlogin