import React from "react";


const Card = ({reservations}) => {
  return (
    <div className="card">
        <h3>{reservations.name}</h3>
         <div>{reservations.date}<br/>
         {reservations.time} pm<br/>
         Number of guests: {reservations.number}<br/>
         <button>Cancel</button>
         </div>
    </div>
  )
}


export default Card;