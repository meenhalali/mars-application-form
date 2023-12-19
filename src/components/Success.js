import React from 'react'
import checkmark from '../images/green_checkmark_image_free.jpg';

export const Success = () => {
  return (
    <div>
        <img src={checkmark} style={{width: "500px", height:"500px"}} alt= "green success checkmark"></img> 
        <h1> Your Mars visit Application Form has been successfully submitted! </h1>
    </div> 
  )
}


