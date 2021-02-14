<template>
  <router-link class="back-to-main" to="/">Back</router-link>
</template>

<script>
  export default {
    name: "BackToMain"
  };
</script>

<style scoped>
  .back-to-main {
    align-items: center;
    background: #b52525;
    border-radius: 50%;
    bottom: 5vh;
    color: #fff;
    display: flex;
    font-size: 20px;
    justify-content: center;
    height: 90px;
    left: 5vw;
    position: absolute;
    text-decoration: none;
    transition: .4s;
    width: 90px;
  }

  .back-to-main:hover {
    animation: pulse 2s infinite;
    transition: .4s;
  }

  @keyframes pulse {
    from {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }

    50% {
      -webkit-transform: scale3d(1.05, 1.05, 1.05);
      transform: scale3d(1.05, 1.05, 1.05);
    }

    to {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }
</style>