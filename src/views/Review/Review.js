import React, { useState } from 'react';
import './Review.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import OneStar from './img/one.png';
import TwoStar from './img/five.png';
import ThreeStar from './img/four.png';
import FourStar from './img/three.png';
import FiveStar from './img/two.png';
function VehicleReviewPage() {
  const [vehicles, setVehicles] = useState([]);
  const [newVehicle, setNewVehicle] = useState({ make: '', model: '', year: '', price: '', review: '' });

  const addVehicle = () => {
    setVehicles([...vehicles, newVehicle]);
    setNewVehicle({ make: '', model: '', year: '', price: '', review: '' });
  };

  const deleteVehicle = (index) => {
    const updatedVehicles = [...vehicles];
    updatedVehicles.splice(index, 1);
    setVehicles(updatedVehicles);
  };



  return (
    <>
        <Navbar/>
        <div className='customer-review'>
          <h2>CUSTOMER REVIEW</h2>
          <div className='c-r-1'>
            <div className='c-r-2'>
              <p children='p1'>Overall Customer <br/>Satisfaction</p>
              <span className='spa1'>4.1</span><span className='spa'>/5</span>
              <p className='p2'>based on 2003 reviews</p>
            </div>
            <div className='c-r'>
              100% Verified Feedback & Reviews From Customers
            </div>
            <div className='img-c'>
              <div>
              <img src={FiveStar} alt="fivestar" /><span>1326</span>
              </div>
              <div>
              <img src={FourStar} alt="fourstar" /><span>221</span>
              </div>
              <div>
              <img src={ThreeStar} alt="threestar" /><span>116</span>
              </div>
              <div>
              <img src={TwoStar} alt="twostar" /><span>73</span>
              </div>
              <div>
              <img src={OneStar} alt="onestar" /><span>267</span>
              </div>
            </div>
          </div>
        </div> 
      <h2 className='heading'>ADD REVIEWS</h2>
      <div className='in-container'>
        <input
          type="text"
          placeholder="Name"
          value={newVehicle.make}
          onChange={(e) => setNewVehicle({ ...newVehicle, make: e.target.value })}
        />
        <input
          type="text"
          placeholder="Model"
          value={newVehicle.model}
          onChange={(e) => setNewVehicle({ ...newVehicle, model: e.target.value })}
        />
        <input
          type="number"
          placeholder="Year"
          value={newVehicle.year}
          onChange={(e) => setNewVehicle({ ...newVehicle, year: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={newVehicle.price}
          onChange={(e) => setNewVehicle({ ...newVehicle, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="Review"
          value={newVehicle.review}
          onChange={(e) => setNewVehicle({ ...newVehicle, review: e.target.value })}
        />
        <br/>
        <button onClick={addVehicle}>Add Review</button>
      </div>

      {vehicles.map((vehicle, index) => (
        <div className='review'>
        <div key={index} className='review-output'>
          <h2>{vehicle.year} {vehicle.make} {vehicle.model}</h2>
          <p>Price: ${vehicle.price}</p>
          <p>Review: {vehicle.review}</p>
          <button onClick={() => deleteVehicle(index)}>Delete</button>
        </div>
        </div>
      ))}
      <Footer/>
    </>
  );
}

export default VehicleReviewPage;