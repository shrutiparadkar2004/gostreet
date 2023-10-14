   import React from "react";
   import "./Footer.css";
   import GitHub from '../Footer/Images/github.png';
   import Linkedin from '../Footer/Images/linkedin1.png';
   import Facebook from '../Footer/Images/facebook1.png';
   import Twitter from '../Footer/Images/twitter.png';
   import Instagram from '../Footer/Images/instagram.png';

export default function Footer(){
    return(
        <>
        <div className="footer">
    
          <h4 className="text-line">Visit Help Center</h4>
         <div className= "footer section_padding">
          <div className="footer-links">
            <div  className="footer-links_div">
                <h4>Company</h4>
                <a href="/aboutus">
                  <p >About Us</p>
                </a>
                <a href="/ouroffering">
                  <p>Our Offerings</p>
                </a>
                <a href="/newsroom">
                  <p>Newsroom</p>
                </a>
                <a href="/investors">
                  <p>Investors</p>
                </a>
                <a href="/blog">
                  <p>Blog</p>
                </a>
                <a href="/careers">
                  <p>Careers</p>
                </a>
              </div>

             <div className="footer-links_div">
                 <h4>Products</h4>
                 <a href = "/ride"  >
                      <p>Ride</p>
                 </a>
                 <a href = "/drive">
                      <p>Drive</p>
                 </a>
                 <a href = "/deliver">
                      <p>Deliver</p>
                 </a>
                 <a href = "/uberforbusiness">
                      <p>Uber for Business</p>
                 </a>
             </div>

             <div className="footer-links_div">
                <h4>Global citizenship</h4>
                <a href = "/safety">
                   <p>Safety</p>
                </a>
                <a href = "/diversityandinclusion">
                   <p>Diversity and Inclusion</p>
                </a>
                <a href = "/sustainability">
                   <p>Sustainability</p>
                </a>
             </div>

             <div className="footer-links_div">
                <h4>Travel</h4>
                <a href="./reserve">
                    <p>reserve</p>
                </a>
                <a href="./airports">
                    <p>Airports</p>
                </a>
                <a href="./cities">
                    <p>Cities</p>
                </a>
             </div>

             <div className="footer-links_div">
                <h4 className="text-name">Find Us On Social Media</h4> 
                 <div className="socialmedia"> 
                      <p><img src={GitHub} alt=""/></p>
                      <p><img src={Linkedin} alt=""/></p>
                      <p><img src={Facebook} alt=""/></p>  
                      <p><img src={Twitter} alt=""/></p>  
                      <p><img src={Instagram} alt=""/></p> 
                </div> 
            </div>
          </div>

          <hr></hr>

          <div className="footer-below">
            <div className="footer-copyright">
                <p className="footerbelow">
                    @{new Date().getFullYear()}Website Created By GoStreet Team.
                </ p>
           </div>
          </div>
          
         </div>
        </div>
     </>
    )
}; 