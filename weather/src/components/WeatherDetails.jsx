
function WeatherDetails() {
  return (
    <div className="grid grid-cols-3 gap-4 mt-8">

      <div className="bg-slate-700 rounded-2xl p-4 text-center">
        <p className="text-slate-400">Feels like</p>
        <p className="text-xl font-semibold">30°C</p>
      </div>

      <div className="bg-slate-700 rounded-2xl p-4 text-center">
        <p className="text-slate-400">Humidity</p>
        <p className="text-xl font-semibold">65%</p>
      </div>

      <div className="bg-slate-700 rounded-2xl p-4 text-center">
        <p className="text-slate-400">Wind</p>
        <p className="text-xl font-semibold">12 km/h</p>
      </div>

    </div>
  );
}

export default WeatherDetails;
