<template>
  <div class="stress-container">
    <div class="card">
      <div class="card__title">Как прошел ваш день?</div>
      <div class="emotion-block">
        <div class="emotion-elements">
          <img src="../../assets/stress-ico/002-crying.svg" alt="">
        </div>
        <div class="emotion-elements">
          <img src="../../assets/stress-ico/001-sweat.svg" alt="">
        </div>
        <div class="emotion-elements">
          <img src="../../assets/stress-ico/004-neutral.svg" alt="">
        </div>
        <div class="emotion-elements">
          <img src="../../assets/stress-ico/005-smile.svg" alt="">
        </div>
        <div class="emotion-elements">
          <img src="../../assets/stress-ico/003-smiling.svg" alt="">
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card__title">Чем вы занимались?</div>
    </div>
    <BackToMain/>
  </div>
</template>

<script>
import BackToMain from '../BackToMain/BackToMain.vue';
export default {
  name: "StressTabs",
  components: {
    BackToMain
  }
};
</script>

<style scoped>
  .stress-container {
    background: url("../../assets/stress-bg.jpg") no-repeat center;
    background-size: cover;
    height: 100%;
    padding-top: 140px;
  }

  .card {
    background: #fff;
    border-radius: 10px;
    margin: 20px;
    max-width: 25vw;
    padding: 10px 10px 30px;
  }

  .card__title {
    margin: 10px 0 20px;
    text-align: center;
    font-size: 24px;
  }

  .emotion-block {
    display: flex;
    justify-content: center;
  }

  .emotion-elements {
    cursor: pointer;
    margin: 0 10px;
    width: 58px;
  }

  .emotion-elements img {
    max-width: 100%;
  }
</style>