// import React, { Component } from 'react';
import StarshipPage from './StarshipPage';
import React, { useState } from 'react';
import axios from 'axios';

function StarshipButtons() {
  const [shipData, setShipData] = useState('');

  const handleNames = (e) => {
    axios.get(`https://swapi.dev/api/starships/`).then(result => {
      setShipData(result.data)
    }).catch(err => {
      console.log('error');
    })
  }
  return (
    <div>
      <Route path='/starship' render={({location}) =>
          <StarshipPage location={location}/>
            }/>
      <button onClick=></button>
    </div>
  )
}





export default StarshipButtons;
