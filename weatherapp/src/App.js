
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

const [weather, setweather] = useState(
  []
)

useEffect(() => {
  fetch("http://api.openweathermap.org/data/2.5/forecast/daily?q=London,uk&cnt=5&APPID=b5421936a38d39b41a8d4eaca03180d2")
  .then(resp => resp.json())
  .then(data => setweather(data))
})


console.log(weather)
  return (
    <div className="App">
      <h1> Weather App</h1>
      <h2>Your Weather For Today</h2>
      <h2>Your 5 Day Forecast</h2>
    </div>
  );
}

export default App;
