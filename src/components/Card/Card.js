import React from 'react'
import "./Card.css"

function Card({ title, description, img }) {
    return (

     <div className='card-container'>
       <img className='image' src={img} />
       <h2 className='title'>{title}</h2>
       <p className='info'>{description}</p>
      </div>
      
    )
  }
  
  export default Card