import React from 'react';
import ReactDOM from 'react-dom/client';
import './Review.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
function Review() {
    return (
        <>

            <div>
               <Navbar />
               <h1>This is Review Page...</h1>
               <Footer/>
            </div>

        </>
    )
}

export default Review;