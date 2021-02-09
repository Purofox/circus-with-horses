<template>
  <div class="stress-container">
    <keep-alive>
      <div class="tab">1</div>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "StressTabs"
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