
import React, { useState } from "react";
import howToUseApp from "../../API/howToUse.js";
import Navbar from "./../../components/Navbar/Navbar";
import Footer from "./../../components/Footer/Footer";
import AboutData from "./../../configs/about-data.json";

import "./About.css";
      /*const About = () => {
      const [aboutData] = useState(howToUseApp);*/
      function About() {

  return (
    <>
    <Navbar/>

      <section className="common-section our-services">
        <div className="container mb-5">
          <div className="row">
            <div className="text-center our-service-leftside-img">
            <div className="our-services-list">
              <h3 className="mini-title">
                -- AVAILABLE @ GOOGLE AND IOS APP STORE ONLY
              </h3>
              </div>
              <img src="https://www.ridester.com/wp-content/uploads/2021/07/ride_services_1.webp" alt="aboutusIMg"/>
            </div>

            {/* 1section right side data  */}
            <div className="our-services-list">
              <h1 className="main-heading">How to use the App?</h1>

              {howToUseApp.map((curElem) => {
                const {id ,title, info } = curElem;
                return (
                  <>
                    <div className="row our-services-info" key={id}>
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              <br />
              <button className="button1">learn more</button>
            </div>
          </div>
        </div>
      </section>

      {/* 2nd part of bayt us section  */}

      <section className="common-section our-services">
        <div className="container mb-5">
          <div className="row">
            <div className="text-center our-service-leftside-img">
            <div className="our-services-list">
              <h3 className="mini-title">
                -- CHECK RIDES IN YOUR CITY
              </h3>
              </div>
              <img src="https://www.enterpriseappstoday.com/wp-content/uploads/2023/08/Ridesharing-Industry-statistics.jpg" alt="aboutusIMg"/>
            </div>

            {/* 1section right side data  */}
            <div className="our-services-list">
              <h1 className="main-heading">Check the availability in your city...</h1>
        
              {howToUseApp.map((curElem) => {
                const {id ,title, info } = curElem;
                return (
                  <>
                    <div className="row our-services-info">
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              <br />
              <button className="button1">learn more</button>
            </div>
          </div>
        </div>

        {
          AboutData.map((data, i)=>{
            const{title, info } = data

            return(
              <div className="card-about">
                <h2> {title} </h2>
                <p> {info} </p>
              </div>

            )
          })
        }
      </section>


      {/* <div class="container-about-team">
        
      <div class="team-info">
            <img src="./Images/about/komaldp.jpg" height="150px" width="150px" class="member-img"/>
            <h3 class="member-name">Komal Pawar</h3>
            <p class="member-info">She is passionate student and she learn web development very well.</p>
            <a href="callto:88058 03087"> <i class="fa-solid fa-phone" style="color:green; margin-left:30%; font-size: 18px;" ></i></a>
            <a href="mailto:komalpawar20003@gmail.com? subject=subject text" ><i class="fa-solid fa-envelope" style="color:red; margin-left:5%; font-size: 18px;"></i></a>
            <a href="https://www.instagram.com/surajshende_247"><i class="fa-brands fa-instagram" style="color:purple; margin-left:5%; font-size: 18px;"></i></a>
            <a href="https://github.com/KomalPawar-29"><i class="fa-brands fa-github" style="margin-left:5%; font-size: 18px;"></i></a>
        </div>

        </div> */}
      <Footer/>
    </>
  );
};

export default About;
