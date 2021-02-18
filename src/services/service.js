import axios from "axios";
const CURRENT_WEATHER = `https://api.weatherbit.io/v2.0/current?city=Tula,RU&key=3e7146c094164969ba3fa45a3d4f214c`;

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