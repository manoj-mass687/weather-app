import { useState } from 'react';
import './App.css';

function WeatherCard({ cityName, temp, condition, humidity }) {  // Day 12: Data received through Props
  return (
    <div style={{border: '2px solid blue', padding: '15px', marginTop: '20px'}}>
      <h2>City: {cityName}</h2>
      <h3>Temp: {temp}</h3>
      <p>Condition: {condition}</p>
      <p>Humidity: {humidity}</p>
    </div>
  );
}


function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const weatherData = {
    'hyderabad': { temp: '32°C', condition: 'Sunny ☀️', humidity: '60%' },
    'mumbai': { temp: '29°C', condition: 'Rainy 🌧️', humidity: '85%' },
    'delhi': { temp: '35°C', condition: 'Hot 🔥', humidity: '45%' },
    'bangalore': { temp: '24°C', condition: 'Cloudy ☁️', humidity: '70%' },
    'chennai': { temp: '33°C', condition: 'Humid 💧', humidity: '75%' },
    'vizag': { temp: '30°C', condition: 'Pleasant 🌤️', humidity: '65%' }
  };

  const getWeather = () => {
    const cityLower = city.toLowerCase();
    if (weatherData[cityLower]) {
      setWeather(weatherData[cityLower]);
    } else {
      setWeather({ temp: 'N/A', condition: 'City not found ❌', humidity: 'N/A' });
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App 🌦️</h1>
        <h3>By: Vejendla Manoj</h3>
        
        <div style={{margin: '20px'}}>
          <input 
            type="text" 
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city: Hyderabad, Mumbai..."
            style={{fontSize: '18px', padding: '10px', width: '250px'}}
          />
          <button 
            onClick={getWeather} 
            style={{fontSize: '18px', padding: '10px 20px', marginLeft: '10px'}}
          >
            Get Weather
          </button>
        </div>

        {/* Day 12: Passing State as Props to Child Component */}
{weather && (
  <WeatherCard 
    cityName={city} 
    temp={weather.temp} 
    condition={weather.condition} 
    humidity={weather.humidity} 
  />
)}
      </header>
    </div>
  );
}

export default App;