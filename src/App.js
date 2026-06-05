import { useState } from 'react';
import './App.css';

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

        {weather && (
          <div style={{marginTop: '30px', fontSize: '24px', backgroundColor: '#3a3f47', padding: '30px', borderRadius: '10px'}}>
            <h2>{city.toUpperCase()}</h2>
            <p>Temperature: {weather.temp}</p>
            <p>Condition: {weather.condition}</p>
            <p>Humidity: {weather.humidity}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;