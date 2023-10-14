  import React, { useState } from 'react';
  import { Link, useNavigate } from 'react-router-dom';
  import showToast from "crunchy-toast";
  import './Adminlogin.css';
  import Navbar from "./../../components/Navbar/Navbar";
  import Footer from "./../../components/Footer/Footer";

    

// import { Link, useNavigate } from 'react-router-dom';
// import showToast from 'Crunchy-toast';

function Adminlogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showUpdatePassword, setShowUpdatePassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = () => {

    const logindata = localStorage.getItem('details');

    if (!logindata) {
      showToast('No data found in localstorage', 'warning', 3000);
      return;
    }

    const storedDetails = JSON.parse(logindata);

    const matchingUser = storedDetails.find((obj) => {
      return obj.email === email && obj.password === password
    }
    );


    if (matchingUser) {
      showToast(`Welcome Back ${matchingUser.firstName}`, 'success', 3000);
      localStorage.setItem('loginData',JSON.stringify(matchingUser))
      navigate('/menucard')
    } else {
      showToast('Invalid Email ID and Password', 'warning', 3000);
    }
  };
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
  {/* <Navbar/>*/}
  
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
    {/* <Footer/> */}
  </>
)
}

  const handleUpdatePassword = () => {
    const logindata = localStorage.getItem('details');

    if (!logindata) {
      showToast('No data found in localstorage', 'warning', 3000);
      return;
    }

    const storedDetails = JSON.parse(logindata);
    const userIndex = storedDetails.findIndex((obj) => {
      return obj.email === email;
    });

    if (userIndex !== -1) {
      storedDetails[userIndex].password = newPassword;
      localStorage.setItem('details', JSON.stringify(storedDetails));
      showToast('Password update successfully', 'success', 3000);
    } else {
      showToast('User not found', 'warning', 3000);
    }

    setShowUpdatePassword(false)
  }

return (
  <>
   <div class="contanier">
        <h1 className='title'> Sign Up</h1>
        <form>
            <div> 
                <p class="label"> Username:</p>
                <input 
                type='text' className='username' placeholder=' Email Or Mobile'
                />
            
            </div>
            <div>
                <p class="label"> Password:</p>
                <input
                className='password' placeholder='password'
                />
            
            </div>
            <div>
                <p class="label"> Confirm password</p>
               <input className='password' placeholder='password'/>
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