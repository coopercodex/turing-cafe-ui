import React, { useState } from "react";

const Form = ({ addRes }) => {
const [name, setName] = useState('');
const [date, setDate] = useState(0);
const [time, setTime] = useState(0);
const [number, setNumber] = useState(0);

const handleChange = (event) => {
  event.preventDefault();
  const newResy = ({id: Date.now(), name, date, time, number})
  addRes(newResy);

  fetch('http://localhost:3001/api/v1/reservations', {
  method: 'POST', 
  headers: {"Content-Type": "application/json"},
  body: JSON.stringify(newResy),
  })

  clearFields();
}
const clearFields = () => {
  setName('');
  setDate(0);
  setTime(0);
  setNumber(0);
}


  return (
    <form onSubmit={handleChange}>
      <input 
      type='text'
      placeholder="Name"
      name='name'
      value={name}
      onChange={event => setName(event.target.value)}
      />
       <input 
      type='date'
      placeholder="Date"
      name='date'
      value={date}
      onChange={event => setDate(event.target.value)}
      />
       <input 
      type='time'
      placeholder="Time"
      name='time'
      value={time}
      onChange={event => setTime(event.target.value)}
      />
       <input 
      type='number'
      placeholder="Number of guests"
      name='number'
      value={number}
      onChange={event => setNumber(event.target.value)}
      />
      <button>Make Reservations</button>
    </form>
  )
}

export default Form; 