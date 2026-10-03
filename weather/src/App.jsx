import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import CurrentWeather from './components/CurrentWeather'
import WeatherDetails from './components/WeatherDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0B0A0F] text-white">
      <Header />

      <SearchBar />

      <div className="mt-12 flex items-center gap-4">
        <CurrentWeather/>
        <WeatherDetails/>
      </div>
    </div>
  )
}

export default App
