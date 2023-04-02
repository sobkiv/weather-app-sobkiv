import axios, { AxiosResponse } from 'axios';

const WEATHER_API_KEY = 'a1a4fc28442dc5851da9084066361d53';

interface WeatherData {
  main: {
    temp: number;
  };
  weather: {
    main: string;
    icon: string;
  }[];
}

async function fetchWeatherData(lat: number, lon: number): Promise<AxiosResponse<WeatherData>> {
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;
  return await axios.get<WeatherData>(URL);
}

export default fetchWeatherData;
