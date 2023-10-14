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
    <div className='container'>
        <Navbar/>
        <div>
          <h1>CUSTOMER REVIEW</h1>
          <div>
            <div>
              Overall Customer Satisfaction
              <span>4.1/5</span>
              based on 2003 reviews
            </div>
            <div>
              100% Verified Feedback & Reviews From Customers
            </div>
            <div>
              <img src={FiveStar} alt="fivestar" />
              <img src={FourStar} alt="fourstar" />
              <img src={ThreeStar} alt="threestar" />
              <img src={TwoStar} alt="twostar" />
              <img src={OneStar} alt="onestar" />
            </div>
          </div>
        </div>
      <h1 className='heading'>Vehicle Review</h1>
      <div className='in-container'>
        <h2>Add Vehicle</h2>
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
        <button onClick={addVehicle} >Add</button>
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
    </div>
  );
}

export default VehicleReviewPage;