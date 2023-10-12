import React from 'react'
import "./Card.css"

function Card({ title, description, img }) {
    return (

     <div className='card-container'>
       <img className='image' src={img} />
       <h4 className='name'>{title}</h4>
       <p className='info'>{description}</p>
       <hr/>
       <div>
          <button className='readbtn'>Read More</button>
       </div>
      </div>
      
    )
  }
  
  export default Card