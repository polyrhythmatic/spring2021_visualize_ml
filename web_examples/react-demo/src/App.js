import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState('');

  return (
    <div className="App">
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >Increase count</button>
      <p>{ counter }</p>
      <input
        onChange={(e) => {
          const value = e.target.value;
          setInput(value);
        }}
        value={ input }
      ></input>
      <p>{ input }</p>
    </div>
  );
}

export default App;
