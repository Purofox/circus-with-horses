<template>
  <div class="prediction">
    <div class="tips">
      <div class="prediction-degrees">10 C</div>
      <div class="prediction-tips">Keep calm and nadevay podstaniki</div>
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
    height: 250px;
    justify-content: center;
    margin: 0 auto;
    padding: 30px;
    text-align: center;
    width: 250px;
  }

  .prediction-degrees {
    font-size: 36px;
  }

  .prediction-tips {
    font-size: 24px;
    margin: 20px 0;
  }
</style>