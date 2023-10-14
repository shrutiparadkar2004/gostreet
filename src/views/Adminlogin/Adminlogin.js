  import React, { useState,useEffect } from 'react';
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
  const [data, setData] = useState([]);
  const [ username, setUsername] = useState('');
  const [ password, setPassword] = useState('');
  console.log( username);
  console.log( password);
  console.log( data);

  // const handleLogin = () => {
  //   if ( username === 'admin' && password === 'password') {
  //     console.log('Sign up Successfully');
  //   }
  //   else
  //   {
  //     alert(' Invalid Credentials. please try again.');
  //   }
  // };
  const sevedata = ()=> {
const obj = {
   username: username,
   password: password,
}
 const temp = [...data, obj]
 setData(temp)
 console.log(data)
 localStorage.setItem('admindata', JSON.stringify(temp));
  }

return (
  <>
  <Navbar/>
  
   <div class="contanier">
        <form>
            <div> 
                <p class="label"> Username:</p>
                <input 
                type='text' className='username' placeholder='Email or Mobile'value={username} type ='text'
                onChange={ (e)=> setUsername(e.target.value)}
                />
            
            </div>
            <div>
                <p class="label"> Password:</p>
                <input
                className='password' placeholder='password' value={password} type='password'
                onChange={(e) => setPassword(e.target.value)}
                />
            
            </div>
            
            <br/>
            <div >
            <button  onClick={()=>{ sevedata()}}  class="register-btn"> Sign Up</button>
            </div>
            <br/>
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