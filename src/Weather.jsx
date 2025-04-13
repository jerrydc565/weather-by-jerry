import React, { useEffect, useState } from "react";
import "./pages/styles/Weather.css";
import Sunny from "./assets/sun.png";
import Rainy from "./assets/storm.png";
import LightRain from "./assets/light-rain.png";
import BrokenCloud from "./assets/overcast cloud.png";
import Snow from "./assets/snow.png.png";
import ModerateRain from "./assets/moderate.png";
import FewCloud from "./assets/FewCloud.png";

function Weather() {
  const [date, setDate] = useState("");
  const [weather, setWeather] = useState(undefined);
  const [search, setSearch] = useState("");
  const [triger, setTriger] = useState("");

  useEffect(() => {
    const value = new Date();
    setDate(value.toDateString());
  }, []);
  useEffect(() => {
    async function getWeather() {
      const API = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=8eb1d6fe629a03e083b39033f6ee0b77`;

      const res = await fetch(API);
      if (!res.ok) {
        setWeather(undefined);
        return;
      }
      const data = await res.json();

      setWeather({
        temp: data.main.temp,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        lon: data.coord.lon,
        lat: data.coord.lat,
        info: data.weather[0].description,
        main: data.weather[0].main,
      });
    }
    getWeather();
  }, [triger]);

  const handleSumbit = (e) => {
    e.preventDefault();
    setTriger(triger + 1);
  };
  const getImage = (info) => {
    if (info === "Rain") {
      return Rainy;
    } else if (info.includes("ky")) {
      return Sunny;
    } else if (info.includes("overcast")) {
      return BrokenCloud;
    } else if (info.includes("now")) {
      return Snow;
    } else if (info.includes("light")) {
      return LightRain;
    } else if (info.includes("moderate")) {
      return ModerateRain;
    } else if (info.includes("few")) {
      return FewCloud;
    } else if (info.includes("roken")) {
      return BrokenCloud;
    }
  };

  return (
    <main className="weather">
      <div className="container">
        <form onSubmit={handleSumbit}>
          <input
            type="search"
            name="search"
            placeholder="Enter your city / Location"
            required
            minLength={2}
            maxLength={50}
            onChange={(e) => setSearch(e.target.value)}
            className="search-bar"
          />
          <button className="get-location">Get Location</button>
        </form>
        <p className="date">Date: {date}</p>
        {weather === undefined && (
          <h2 style={{ color: "white" }}>Weather Information Not Found</h2>
        )}
        {weather && (
          <section>
            <img src={getImage(weather.info)} alt="" className="weather-img" style={{width: "20%"}} />
            <p>Temperature: {weather.temp} oC</p>
            <p>Pressure: {weather.pressure} hpa</p>
            <p>Humidity: {weather.humidity}</p>
            <p style={{ textTransform: "capitalize" }}>
              {" "}
              Weather Description: {weather.info}
            </p>
            <p>Main info: {weather.main}</p>
          </section>
        )}
      </div>
    </main>
  );
}

export default Weather;
