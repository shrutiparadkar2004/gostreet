import React from 'react'
import "./Card.css"

function Card({ title, description, img }) {
    return (

     <div className='card-container'>
       <img className='image' src={img} />
       <h4 className='title'>{title}</h4>
       <p className='info'>{description}</p>
       <hr/>
       <div>
          <button className='btnn'>Read</button>
       </div>
      </div>
      
    )
  }
  
  export default Card