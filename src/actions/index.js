import axios from 'axios'

const API_KEY = '8a1eeef220eedadb18eae7cc2e4c044c'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city, country) {
  const url = `${ROOT_URL}&id=${city},${country}`
  const request = axios.get(url)

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}

