<template>
  <div class="stress-container">
    <keep-alive>
      <div class="tab">1</div>
    </keep-alive>
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
</style>