<template>
  <div class="weather">
    <div v-if="this.$store.state.dataIsRecived" class="weather-widget">
      <div class="weather-widget__city">{{ weather.city_name }}</div>
      <div class="weather-widget__temp">{{ weather.temp }}<span>°C</span></div>
      <div class="weather-widget__status">{{ weather.weather.description }}</div>
    </div>
    <div v-else class="weather-widget">
      <img src="../../assets/001-loading.svg" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "WeatherWidget",
    computed: {
      weather() {
        return this.$store.state.weather;
      }
    },
    created() {
      this.$store.dispatch("updateWeather");
    }
  };
</script>

<style scoped>
.weather {
  position: absolute;
  right: 2vw;
  top: 2vw;
}
.weather-widget {
  align-items: center;
  background: #429EA6;
  border-radius: 50%;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  height: 200px;
  justify-content: center;
  width: 200px;
}

.weather-widget img {
  width: 50px;
}

.weather-widget__temp {
  margin: 5px 0;
}

.weather-widget__status {
  font-size: 16px;
}

</style>