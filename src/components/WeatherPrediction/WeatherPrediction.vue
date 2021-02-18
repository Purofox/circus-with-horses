<template>
  <div class="prediction">
    <div class="tips" v-if="this.$store.state.dataIsRecived">
      <div class="prediction-degrees">{{ weather.temp }}<span>°C</span></div>
      <div class="prediction-status">{{ weather.weather.description }}</div>
      <div class="prediction-tips">{{ this.tips }}</div>
    </div>
    <BackToMain/>
  </div>
</template>

<script>
  import BackToMain from '../BackToMain/BackToMain.vue';
  export default {
    name: "WeatherPrediction",
    data() {
      return {
        tips: '',
      };
    },
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

      if (this.weather.temp < 0) {
        this.tips = 'Keep calm and nadevay podstaniki';
      } else if  (this.weather.temp > 24) {
        this.tips = 'Hell and Israel';
      } else {
        this.tips = 'Good weather';
      }
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