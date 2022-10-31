import React from 'react';
import Card from './Card'

const Reservations = ({reservations}) => {
    const getReserves = reservations.map((res) => {
      return <Card reservations={res} key={res.id} id={res.id}/>
    })
  return (
    <div className='res-container'>
      {getReserves}
    </div>
  )
}

export default Reservations;