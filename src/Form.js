import React from "react";

const Form = () => {




  return (
    <form >
      <input 
      type='text'
      placeholder="Name"
      name='name'
      // value='{name}'
      // onChange={}
      />
       <input 
      type='date'
      placeholder="Date"
      name='date'
      // value='{name}'
      // onChange={}
      />
       <input 
      type='time'
      placeholder="Time"
      name='time'
      // value='{name}'
      // onChange={}
      />
       <input 
      type='number'
      placeholder="Number of guests"
      name='number of guests'
      // value='{name}'
      // onChange={}
      />
      <button>Make Reservations</button>
    </form>
  )
}

export default Form; 