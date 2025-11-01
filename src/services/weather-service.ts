import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
});

export async function getCurrentWeather(city: string) {
  try {
    const response = await apiClient.get(`/weather`, {
      params: { city },
    })
    return response.data;
  } catch (error) {
    console.error("Error fetching weather:", error);
    throw error
  }
}

export async function getDetailedForecast(city: string) {
  try {
    const response = await apiClient.get(`/weather/detailedForecast`, {
      params: { city },
    })
    return response.data;
  } catch (error) {
    console.error("Error fetching weather:", error);
    throw error
  }
}

export async function getShortForecast() {
  try {
    const response = await apiClient.get(`/weather/shortForecast`)
    return response.data
  } catch (error) {
    console.error("Error fetching weather:", error);
    throw error
  }
}


