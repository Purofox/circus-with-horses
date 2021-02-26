import axios from "axios";
const CURRENT_WEATHER = `https://api.weatherbit.io/v2.0/current?city=Tula,RU&key=feea5096c4fb4100aaae9c9c1ea2b3a1`;

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