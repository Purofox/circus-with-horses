<template>
  <section class="main-page">
    <div class="container">
      <nav class="user-link">
        <ul class="round-list">
          <li class="round-list__element">
            <router-link to="/education">Education plan</router-link>
          </li>
          <li class="round-list__element">
            <router-link to="/pomodoro">Pomodoro Tracker</router-link>
          </li>
          <li class="round-list__element">
            <router-link to="/stress">Stress level</router-link>
          </li>
        </ul>
      </nav>

      <div class="user-profile">
        <div class="user-profile__img">
          <img src="../../assets/avatar.png" alt="">
        </div>
        <div class="user-profile__name">Lisa</div>
      </div>

      <Deadline/>
    </div>
  </section>
</template>

<script>
import Deadline from '../Deadline/Deadline.vue';
export default {
  name: "MainList",
  components: {
    Deadline
  }
};

</script>

<style scoped>
@keyframes rot {
  from {
    transform: rotate(0deg)
    translate(-150px)
    rotate(0deg);
  }
  to {
    transform: rotate(360deg)
    translate(-350px)
    rotate(-360deg);
  }
}

.main-page {
  background: url("../../assets/main-bg.jpg") no-repeat center;
  background-size: cover;
  height: 100%;
  padding-top: 140px;
}

.user-profile {
  color: #fff;
  font-size: 24px;
  max-width: 200px;
  margin: 5vw auto 0;
  text-align: center;
}

.user-profile img {
  border-radius: 50%;
  max-width: 100%;
}

.round-list {
  align-items: center;
  bottom: 0;
  height: 450px;
  list-style: none;
  left: 0;
  margin: auto;
  padding: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 450px;
}

.round-list__element {
  /*animation: rot 10s infinite linear;*/
  height: 150px;
  left: 70px;
  position: absolute;
  top: 40px;
  width: 150px;
}

.round-list__element a {
  align-items: center;
  background: #0009;
  border-radius: 50%;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  font-size: 18px;
  height: 100%;
  justify-content: center;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  transition: .4s;
  width: 100%;
  word-break: break-word;
}

.round-list__element:hover {
  animation: none;
}

.round-list__element a:hover {
  transition: .4s;
  background: #000;
}

.round-list__element:first-child {
  left: -5vw;
  top: -20vh;
}

.round-list__element:nth-child(2) {
  left: 0;
  top: 30vh;
}

.round-list__element:last-child {
  left: 25vw;
  top: 15vh;
}
</style>