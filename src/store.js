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
    mutations: {
        UPDATE_WEATHER(state) {
            service
                .getWeather()
                .then(response => {
                    state.weather = response.data.data[0];
                    state.dataIsRecived = true;
                    if (state.weather.temp < 0) {
                        state.tips = 'Keep calm and nadevay podstaniki';
                    } else if  (this.weather.temp > 25) {
                        state.tips = 'Hell and Israel';
                    } else {
                        state.tips = 'Good weather';
                    }
                    console.log(response);
                })
                .catch(error => {
                    console.log("There was an error:", error.response);
                    state.dataIsRecived = false;
                });
        }
    },
    actions: {
        updateWeather(context) {
            context.commit("UPDATE_WEATHER");
        }
    }
});