<template>
  <div class="prediction">
    <div class="tips" v-if="this.$store.state.dataIsRecived">
      <div class="prediction-degrees">{{ weather.temp }}<span>°C</span></div>
      <div class="prediction-status">{{ weather.weather.description }}</div>
      <div class="prediction-tips">{{ this.$store.state.tips }}</div>
    </div>
    <BackToMain/>
  </div>
</template>

<script>
  import BackToMain from '../BackToMain/BackToMain.vue';
  export default {
    name: "WeatherPrediction",
    components: {
      BackToMain
    },
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
  .prediction {
    background: url("../../assets/weather.jpg") no-repeat center;
    background-size: cover;
    height: 100%;
    padding-top: 140px;
  }

  .tips {
    background: #ffffffad;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    height: 300px;
    justify-content: center;
    margin: 0 auto;
    padding: 30px;
    text-align: center;
    width: 300px;
  }

  .prediction-degrees {
    font-size: 36px;
  }

  .prediction-tips {
    font-size: 24px;
    margin: 20px 0;
  }
</style>