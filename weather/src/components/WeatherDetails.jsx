
function WeatherDetails({ weather }) {
  if (!weather) {
    return null;
  }

  return (
    <div className="grid grid-cols-3 gap-4 mt-8">

      <div className="bg-slate-700 rounded-2xl p-4 text-center">
        <p className="text-slate-400">Feels like</p>
        <p className="text-xl font-semibold">{Math.round(weather.current.apparent_temperature)}°C</p>
      </div>

      <div className="bg-slate-700 rounded-2xl p-4 text-center">
        <p className="text-slate-400">Humidity</p>
        <p className="text-xl font-semibold">{weather.current.relative_humidity_2m}%</p>
      </div>

      <div className="bg-slate-700 rounded-2xl p-4 text-center">
        <p className="text-slate-400">Wind</p>
        <p className="text-xl font-semibold">{Math.round(weather.current.wind_speed_10m)} km/h</p>
      </div>

    </div>
  );
}

export default WeatherDetails;
