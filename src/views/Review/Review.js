import React, { useState } from 'react';
import './Review.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

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
    <div>
        <Navbar/>
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