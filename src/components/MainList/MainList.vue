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
    </div>
  </section>
</template>

<script>
export default {
  name: "MainList",
}

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
    margin: 0 auto;
    text-align: center;
  }

  .user-profile img {
    border-radius: 50%;
    max-width: 100%;
  }

  .round-list {
    align-items: center;
    bottom: 0;
    display: flex;
    justify-content: center;
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
    /*position: absolute;*/
    top: 40px;
    width: 150px;
  }

  .round-list__element a {
    align-items: center;
    border: 3px solid #fff;
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
    background: #0009;
  }
</style>