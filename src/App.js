// import logo from './logo.svg';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import StarshipButtons from './components/StarshipButtons';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <StarshipButtons />

      </div>
    </BrowserRouter>

  );
}

// <Route path='/starship' render={({location}) =>
//       <StarshipPage location={location}/>
//     }/>

export default App;
