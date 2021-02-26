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
        getWeather() {
            return this.weather;
        }
    },
    mutations: {
        UPDATE_WEATHER(result) {
            this.state.weather = result;
        }
    },
    actions: {
        updateWeather(context) {
            const result = service
                .getWeather()
                .then(response => {
                    this.state.weather = response.data.data[0];
                    this.state.dataIsRecived = true;
                    // if (this.state.weather.temp < 0) {
                    //     this.state.tips = 'Keep calm and nadevay podstaniki';
                    // } else if  (this.weather.temp > 25) {
                    //     this.state.tips = 'Hell and Israel';
                    // } else {
                    //     this.state.tips = 'Good weather';
                    // }
                    console.log(response);
                })
                .catch(error => {
                    console.log("There was an error:", error.response);
                    this.state.dataIsRecived = false;
                });
            context.commit("UPDATE_WEATHER", result);
        }
    }
});