import React from 'react'
import "./Card.css"

function Card({ title, description, img }) {
    return (

     <div className='card-container'>
       <img className='image' src={img} />
       <h5 className='title'>{title}</h5>
       <p className='info'>{description}</p>
      </div>
      
    )
  }
  
  export default Card