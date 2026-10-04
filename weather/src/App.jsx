import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import CurrentWeather from './components/CurrentWeather'
import WeatherDetails from './components/WeatherDetails'

import { getCoordinates, getWeather } from "./services/weatherApi"; 

function App() {
  const [city, setCity] = useState('New Delhi');
  const [weather, setWeather] = useState(null);

  const handleSearch = async (searchedCity) => {
  try {
    const location = await getCoordinates(searchedCity);

    console.log(location);

    const weather = await getWeather(location.latitude, location.longitude);
    console.log(weather);

    setCity(location.name);
    setWeather(weather);
  } catch (error) {
    console.error(error);
    }
  };


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0B0A0F] text-white">
      <Header />

      <SearchBar onSearch={handleSearch} />

      <div className="mt-12 flex items-center gap-4">
        <CurrentWeather city={city} weather={weather} />
        <WeatherDetails weather={weather} />
      </div>
    </div>
  )
}

export default App
