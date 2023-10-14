
// import "./about.css";
  //import Navbar from "./../../components/Navbar/Navbar";
  //import Footer from "./../../components/Footer/Footer";

 import React, { useState } from "react";
import howToUseApp from "../../API/howToUse.js";
import Navbar from "./../../components/Navbar/Navbar";
import Footer from "./../../components/Footer/Footer";
import Card from './../../components/Card/Card';

import "./About.css";

const About = () => {
  const [aboutData] = useState(howToUseApp);
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

              {aboutData.map((curElem) => {
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
              <button className="btn-style btn-style-border">learn more</button>
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
                -- AVAILABLE @ GOOGLE AND IOS APP STORE ONLY
              </h3>
              </div>
              <img src="https://www.enterpriseappstoday.com/wp-content/uploads/2023/08/Ridesharing-Industry-statistics.jpg" alt="aboutusIMg"/>
            </div>

            {/* 1section right side data  */}
            <div className="our-services-list">
              <h1 className="main-heading">Check the availability in your city...</h1>

              {aboutData.map((curElem) => {
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
              <button className="btn-style btn-style-border">learn more</button>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
      {/* images section  
             <div className="our-service-rightside-img">
              <img src="https://www.enterpriseappstoday.com/wp-content/uploads/2023/08/Ridesharing-Industry-statistics.jpg" alt="aboutusIMg" />
            </div>
            */}
    </>
  );
};

export default About;
