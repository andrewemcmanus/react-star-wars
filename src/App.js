// import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import StarshipPage from './components/StarshipPage';
// import StarshipButtons from './components/StarshipButtons';
// import NavBar from './components/NavBar';

function App() {
  const [shipData, setShipData] = useState({ results: []});
  // const [shipId, setShipId] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios('https://swapi.dev/api/starships/');
      setShipData(response.data);
    };
    fetchData();
  }, []);

console.log(shipData.results);

// <Route path="/starships" render={() => {return <StarshipPage />}} />
  return (
    <BrowserRouter>
      <div className="App">
        <StarshipPage />
      </div>
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
