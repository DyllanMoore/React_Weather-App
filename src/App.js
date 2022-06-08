import './App.css';
import Axios from 'axios';
import React, { useState } from 'react';
import { DateBuilder } from './components/DateBuilder';
import { DisplayWeather } from './components/DisplayWeather';

const api = {
  key: "ffa8ad628cae45e89a5235208221605",
  base: "https://api.weatherapi.com/v1/current.json?key="
};

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({
    city: "",
    country: "",
    temperature: "",
    precipitation: "",
    wind: "",
    cloud: ""
  });

  const search = event => {
    if (event.key === "Enter") {
      Axios.get(`${api.base}${api.key}&q=${query}&aqi=no`)
        .then((response) =>
          setWeather({
            city: response.data.location.name,
            country: response.data.location.country,
            temperature: response.data.current.temp_f,
            wind: response.data.current.wind_mph,
            cloud: response.data.current.cloud,
            precipitation: response.data.current.precip_in
          }),
        );

    };
  }

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDate = new Date();


  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
      <main>
        <DateBuilder
          day={days[currentDate.getDay()]}
          month={months[currentDate.getMonth()]}
          year={currentDate.getFullYear()}
          date={currentDate.getDate()}
        />
        <div className="Search">
          <input
            type="text"
            className="SearchBar"
            placeholder="search..."
            onChange={e => setQuery(e.target.value)}
            onKeyPress={search}
            value={query}
          />
          {/* <button
            type="submit"
            onClick={search}
          /> */}
        </div>
        {(typeof weather.main === "undefined") ? (
          <DisplayWeather
            city={weather.city}
            country={weather.country}
            temperature={weather.temperature}
            precipitation={weather.precipitation}
            wind={weather.wind}
            cloud={weather.cloud}
          />
        ) : ('')}
      </main >
    </div>
  );
}

export default App;
