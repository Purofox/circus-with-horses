import axios from "axios";
const CURRENT_WEATHER = `https://api.weatherbit.io/v2.0/current?city=Tula,UA&key=b60f3577e8eb46f089853e2a9fd7d744`;

const apiClient = axios.create({ // create promise
    baseURL: CURRENT_WEATHER,
    withCredentials: false, // CORS
    headers: { // some HTTP headers
        Accept: "application/json",
        "Content-Type": "application/json"
    }
});

export default {
    getWeather() {
        return apiClient.get();
    }
};