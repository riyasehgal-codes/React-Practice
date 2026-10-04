function CurrentWeather({ city, weather }) {
  if (!weather) {
    return (
      <div className="text-center">
        <h2 className="text-3xl font-semibold">
          {city}
        </h2>

        <p className="text-slate-400 mt-4">
          Search for a city to see its weather
        </p>
      </div>
    );
  }

  return (
    <div className="text-center">
      <h2 className="text-3xl font-semibold">
        {city}
      </h2>

      <div className="text-7xl my-6">
        ☀️
      </div>

      <div className="text-6xl font-bold">
        {Math.round(weather.current.temperature_2m)}°C
      </div>

      <p className="text-xl text-slate-300 mt-3">
        Weather
      </p>
    </div>
  );
}

export default CurrentWeather;