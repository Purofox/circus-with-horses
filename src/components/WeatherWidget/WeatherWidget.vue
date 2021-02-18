<template>
  <div>
    <div v-if="this.$store.state.dataIsRecived" class="weather-widget">
      <p class="weather-widget__city">{{ weather.city_name }}</p>
      <h2 class="weather-widget__temp">{{ weather.temp }}<span>°C</span></h2>
      <p class="weather-widget__status">{{ weather.weather.description }}</p>
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
.weather-widget {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #429EA6;
}

.weather-widget img {
  width: 50px;
}

.weather-widget__city {
  font-size: 20px;
  margin: 0;
}

.weather-widget__temp {
  display: flex;
  align-items: flex-start;
  color: #16F4D0;
  font-size: 200px;
  font-weight: 200;
  margin: 0;
}

.weather-widget__status {
  font-size: 20px;
  margin: 0;
}
</style>