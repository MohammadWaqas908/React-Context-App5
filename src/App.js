import React, {useState} from 'react';
import './App.css';
import Parent from './Parent';
import valueContext from './valueContext';

function App() {
  //let [number, setNumber]=useState(45);
  let value=81;
  return (
    <valueContext.Provider value={value}>
    <div>
      Hello World From Waqas
      <Parent></Parent>
    </div>
    </valueContext.Provider>
  );
}

export default App;
