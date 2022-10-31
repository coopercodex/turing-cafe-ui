import React, { Component } from 'react';
import Reservations from '../Reservations';
import Form from '../Form';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: [
        { name: 'Leta', date: '5/9', time: '7:00', number: 6, id: 1 },
        { name: 'Christie', date: '5/7', time: '6:30', number: 3, id: 2 }
      ]
    }
  }

  // componentDidMount = () => {

  // }

 

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        {/* <div className='resy-form'>
        </div> */}
        {/* <div className='resy-container'>
        </div> */}
        <Form reservations={this.state.reservations} />
        <Reservations reservations={this.state.reservations} />
      </div>
    )
  }
}

export default App;
