// import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import StarshipButtons from './components/StarshipButtons';
// import StarshipButtons from './components/StarshipButtons';
// import NavBar from './components/NavBar';

function App() {
  const [shipData, setShipData] = useState({ results: []});
  const [shipId, setShipId] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(`https://swapi.dev/api/starships/${shipId}`);
      setShipData(response.data);
    };
    fetchData();
  }, []);

console.log(shipData.results);

// <Route path="/starships" render={() => {return <StarshipPage />}} />
  return (
    <BrowserRouter>
      <Route exact path='/starships' component={StarshipButtons} />
    </BrowserRouter>
  );
}

// <Navbar />
// <Switch>
//   <Route exact path='/' render={<StarshipButtons location={location} />} />
//   <Route exact path='/starships' render={({location}) =>
//     <StarshipPage location={location}/>
//       }/>
// </Switch>
// <Route path='/starship' render={({location}) =>
//       <StarshipPage location={location}/>
//     }/>

export default App;
