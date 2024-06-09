import axios from 'axios';

const API_KEY = "f6180bd58c37238be14df83851c2be75";

export const fetchWeather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  try {
    const response = await axios.get(url);
    console.log(response)
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch weather data");
  }
};
