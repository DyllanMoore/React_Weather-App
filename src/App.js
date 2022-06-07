import './App.css';
import { useState } from 'react';
import Axios from 'axios';

function App() {
  return (
    <div className="App">
      <div className="Search">
        <input type="text" />
        <button type="submit">Search</button>
      </div>
      <div className="Body">
        <h1>Location</h1>
        <h2 className="WeatehrData">Temperature: </h2>
        <h2 className="WeatehrData">Wind: </h2>
        <h2 className="WeatehrData">Cloud Cover: </h2>
        <h2 className="WeatehrData">Percipitation: </h2>
      </div>
    </div>
  );
}

function GetLocation(props) {


}

export default App;
