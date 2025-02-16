import React, { useState, useEffect, useCallback } from "react"
import "../styles/Project5.css"

const Project5 = () => {
  const [weather, setWeather] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [city, setCity] = useState("Dhaka")
  const [unit, setUnit] = useState("celsius")
  const [forecast, setForecast] = useState(null)

  const fetchWeather = useCallback((cityName) => {
    setLoading(true)
    setError(null)
    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.results && data.results.length > 0) {
          const { latitude, longitude } = data.results[0]
          return fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`,
          )
        } else {
          throw new Error("City not found")
        }
      })
      .then((response) => response.json())
      .then((data) => {
        setWeather(data.current_weather)
        setForecast(data.daily)
        setLoading(false)
      })
      .catch((error) => {
        setError(error.message)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    fetchWeather(city)
  }, [city, fetchWeather])

  const handleSearch = (event) => {
    event.preventDefault()
    const searchCity = event.target.elements.city.value
    setCity(searchCity)
  }

  const toggleUnit = () => {
    setUnit(unit === "celsius" ? "fahrenheit" : "celsius")
  }

  const convertTemperature = (temp) => {
    if (unit === "fahrenheit") {
      return ((temp * 9) / 5 + 32).toFixed(1)
    }
    return temp.toFixed(1)
  }

  const getWeatherIcon = (code) => {
    if (code <= 3) return "☀️"
    if (code <= 48) return "☁️"
    if (code <= 67) return "🌧️"
    if (code <= 77) return "❄️"
    if (code <= 82) return "🌦️"
    return "⛈️"
  }

  const getWeatherBackground = (code) => {
    if (code <= 3) return "sunny"
    if (code <= 48) return "cloudy"
    if (code <= 67) return "rainy"
    if (code <= 77) return "snowy"
    if (code <= 82) return "partly-cloudy"
    return "stormy"
  }

  const getDayName = (dateString) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const date = new Date(dateString)
    return days[date.getDay()]
  }

  return (
    <div className={`project5-container ${weather ? getWeatherBackground(weather.weathercode) : ""}`}>
      <div className="weather-container">
        <h1 className="app-title">Weather Forecast</h1>
        <form onSubmit={handleSearch} className="search-form">
          <input type="text" name="city" placeholder="Enter city name" />
          <button type="submit">Search</button>
        </form>
        <button onClick={toggleUnit} className="unit-toggle">
          Switch to {unit === "celsius" ? "Fahrenheit" : "Celsius"}
        </button>
        {loading && <div className="loading">Loading...</div>}
        {error && <div className="error">Error: {error}</div>}
        {weather && !loading && !error && (
          <div className="weather-info">
            <h2>Current Weather in {city}</h2>
            <div className="current-weather">
              <div className={`weather-icon ${getWeatherBackground(weather.weathercode)}`}>
                {getWeatherIcon(weather.weathercode)}
              </div>
              <p className="temperature">
                {convertTemperature(weather.temperature)}°{unit === "celsius" ? "C" : "F"}
              </p>
              <p>Wind Speed: {weather.windspeed} m/s</p>
            </div>
          </div>
        )}
        {forecast && !loading && !error && (
          <div className="forecast">
            <h3>5-Day Forecast</h3>
            <div className="forecast-container">
              {forecast.time.slice(1, 6).map((day, index) => (
                <div key={day} className="forecast-day">
                  <p>{getDayName(day)}</p>
                  <div className={`weather-icon ${getWeatherBackground(forecast.weathercode[index + 1])}`}>
                    {getWeatherIcon(forecast.weathercode[index + 1])}
                  </div>
                  <p>
                    {convertTemperature(forecast.temperature_2m_max[index + 1])}° /{" "}
                    {convertTemperature(forecast.temperature_2m_min[index + 1])}°
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Project5

