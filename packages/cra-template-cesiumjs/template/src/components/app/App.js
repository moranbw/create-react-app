import React from 'react';
import './App.css';
import Map from '../map/Map';
import MapAPI from '../../service/MapAPI';

function App() {
  return (
    <div className="App">
      <Map MapAPI={MapAPI} />
    </div>
  );
}

export default App;
