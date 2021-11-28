
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

const [weather, setweather] = useState(
  []
)
useEffect(
  () => {
    fetch("http://api.weatherapi.com/v1/forecast.json?key=fe325598597046149c9172005212211&q=Bronx&days=3")
  .then(resp =>  {
    if(!resp.ok) {
      throw new Error(resp.statusText)
    }
    return resp.json()
  })
  .then(data => setweather(data))
  },
  [weather],
);
  
 
  
 const displayWeather= (arr) => {
      return(arr.map((ele) => {
        let date = new Date(ele.date)
        return(
          <div className="day">
            <h2>{date.toDateString()}</h2>
            <img src={ele.day.condition.icon} alt={ele.day.condition.text} />
            <div className="temps">
                <p>{ele.day.mintemp_f}F</p>
                <p>{ele.day.maxtemp_f}F</p>
            </div>

          </div>
        )
      }))
  }

  const displayDaily= (obj) => {
    let date = new Date(obj.current.last_updated)
    return(
      <div className="day">
        <h2>{date.toDateString()}</h2>
        <img src={obj.current.condition.icon} alt={obj.current.condition.text} />
        <div className="temps">
          <p>{obj.current.feelslike_f}F</p>
          <p>{obj.current.temp_f}F</p>
        </div>
      </div>
    )
  }


// console.log(weather)
  return (
    <div className="App">
      <h1> Weather App</h1>
      {weather.location && <h2>Your Weather For Right Now(in {weather.location.name})</h2>}
      <div className="row">
        {weather.current && displayDaily(weather)}
      </div>
      <h2>Your 3 Day Forecast</h2>
      <div className="row">
      {weather.forecast && displayWeather(weather.forecast.forecastday)}
      </div>
      
    </div>
  );
}

export default App;
