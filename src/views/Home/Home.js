   import ReactDOM from 'react-dom/client';
   import Navbar from "./../../components/Navbar/Navbar";
   import Footer from "./../../components/Footer/Footer";
 
       import './Home.css';
        function Home () {
     return (
         <>
           <Navbar/>
     
           {/* <h1 className="body-div">Home Page</h1> */}


             

           <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1899,h_805/v1613521692/assets/d9/ce6c00-32b0-4b93-9f0d-6f927d93da08/original/Rider_Home_bg_desktop2x.png" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1899,h_833/v1613521435/assets/bc/0529b6-c37a-416b-9907-2cb44c4c2888/original/Earner_Home_bg_desktop2x.png" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1899,h_778/v1677102595/assets/66/2853af-061f-4176-8c6b-f2ddef091599/original/UberIM_002309-%281%29.jpg" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
           <span class="visually-hidden">Previous</span>
         </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div><br></br><br></br>

         <h1 className='text-h'> Why passengers choose us</h1> <br></br><br></br>

        <div class="d-flex justify-content-evenly flex-wrap">
        <div class="text-center">
        <img src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_188,h_188/v1649914539/assets/86/82f8b3-e2e6-45f8-a8f7-fdc511f709e0/original/Moto-150X150p4x.png' />
        <h2>GoStreet Bike</h2><br></br>
      <div>
         <h4>You have freedom of choice</h4>
         <h5 className='text-desc'><p>Traveling by bike is to take the<br></br> slow road. This shouldn't be <br></br>seen as something negative <br></br>but as something to embrace.</p></h5>
      </div>
    </div>

       <div class="text-center">
          <img src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_188,h_188/v1649914471/assets/89/8e4239-5e7d-4de7-bf71-00cc32d468db/original/Auto-150X150p4x.png' />
          <h2>GoStreet Auto</h2><br></br>
   
       <div>
           <h4>You set the price</h4>
           <h5 className='text-desc'><p>Offer your fares and save on<br></br> every ride long or short. No hidden <br></br>charges or surge pricing.No more <br></br>algorithms telling you what to pay.</p></h5>
      </div>
    </div>

         <div class="text-center">
         <img src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_188,h_188/v1649914597/assets/f7/7f583f-447a-4cf7-8da6-6ad254f0a66b/original/Intercity-150X150p4x.png' />
         <h2>GoStreet Car</h2><br></br>
       <div>
         <h4>You have freedom of choice</h4>
         <h5 className='text-desc'><p>Select the best offers from <br></br>drivers based on price, vehicle,<br></br> and estimated arrival time.</p></h5>
       </div>
     </div>

       <div class="text-center">
          <img src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_188,h_188/v1630531077/assets/38/494083-cc23-4cf7-801c-0deed7d9ca55/original/uber-hourly.png' />
          <h2>GoStreet Rental</h2><br></br>
       <div>
            <h4>You know your driver</h4>
            <h5 className='text-desc'><p>Now everything is under control <br></br>you even choose your driver <br></br>based on their rating and on <br></br>other passenger's feedback.</p></h5>
       </div>
     </div>


 
</div> 

             <Footer/>
         </>
     )
 }
 
export default Home;




