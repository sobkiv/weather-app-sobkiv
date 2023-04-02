import React, { useEffect, useState } from "react";
import { Typography, CircularProgress } from "@mui/material";
import fetchGeocodingData from "../../services/DataService/fetchGeocodingData";
import fetchWeatherData from "../../services/DataService/fetchWeatherData";
import "./WeatherDisplay.css";

interface WeatherDisplayProps {
  city: string;
  onDegree: (degree: number) => void;
}

function WeatherDisplay({ city, onDegree }: WeatherDisplayProps): JSX.Element {
  const [weatherData, setWeatherData] = useState<any>(null);

  useEffect(() => {
    fetchGeocodingData(city)
      .then(({ data }) => {
        return fetchWeatherData(data[0].lat, data[0].lon);
      })
      .then(({ data }) => {
        setWeatherData(data);
        onDegree(data.main.temp);
      });
  }, [city, onDegree]);

  if (!weatherData) {
    return <CircularProgress />;
  }

  const { name, main, weather } = weatherData;

  return (
    <div className="list text">
      <Typography variant="h5">Weather in {name}</Typography>
      <Typography>Temperature: {main.temp}°C</Typography>
      <Typography>Humidity: {main.humidity}%</Typography>
      <Typography>Description: {weather[0].description}</Typography>
    </div>
  );
}

export default WeatherDisplay;
