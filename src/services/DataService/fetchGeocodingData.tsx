import axios, { AxiosResponse } from 'axios';

const WEATHER_API_KEY = 'a1a4fc28442dc5851da9084066361d53';

interface GeocodingData {
  lat: number;
  lon: number;
}

async function fetchGeocodingData(city: string): Promise<AxiosResponse<GeocodingData[]>> {
  const URL = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${WEATHER_API_KEY}`;
  return await axios.get<GeocodingData[]>(URL);
}

export default fetchGeocodingData;
