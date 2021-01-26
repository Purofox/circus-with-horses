<template>
  <section class="main-page">
    <div class="container">
      <nav class="user-link">
        <ul>
          <li>
            <a href="#">Education plan</a>
          </li>
          <li>
            <a href="#">Pomodoro Tracker</a>
          </li>
          <li>
            <a href="#">Pomodoro Tracker</a>
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
  name: "MainList"
}
</script>

<style scoped>
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

  .user-link ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>