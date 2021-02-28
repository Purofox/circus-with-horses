import Vue from "vue";
import Vuex from "vuex";
import service from "./services/service.js";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        weather: {},
        dataIsRecived: false,
        tips: ''
    },
    getters: {
        getWeather(state) {
            return state.weather;
        }
    },
    mutations: {
        UPDATE_WEATHER(state, result) {
            state.weather = result;
            if (state.weather.temp < 0) {
                state.tips = 'Keep calm and nadevay podstaniki';
            } else if  (state.weather.temp > 25) {
                state.tips = 'Hell and Israel';
            } else {
                state.tips = 'Good weather';
            }
        }
    },
    actions: {
        updateWeather(context) {
            service
                .getWeather()
                .then(response => {
                    this.state.dataIsRecived = true;
                    console.log(response);
                    context.commit("UPDATE_WEATHER", response.data.data[0]);
                })
                .catch(error => {
                    console.log("There was an error:", error.response);
                    this.state.dataIsRecived = false;
                });
        }
    }
});