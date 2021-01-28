<template>
  <div class="timer-container">
    <div class="settings">Set Interval</div>
    <div class="timer">
      {{sessionName}}
      <div class="timer-value test">
        <span class="minute">{{ minutes }}</span>
          <span>:</span>
        <span class="seconds">{{ seconds }}</span>
      </div>
    </div>
    <div class="timer-control">
      <div class="control" @click="startTimer">Start</div>
      <div class="control" @click="stopTimer">Stop</div>
    </div>

    <router-link class="back-to-main" to="/">Back</router-link>
  </div>
</template>

<script>
export default {
    name: "Pomodoro",
    data() {
      return {
        timer: null,
        totalTime: (25 * 60),
        resetButton: false,
        sessionName: "Work",
        edit: false
      }
    },

    mounted() {
      let timer_now = localStorage.getItem('timer_now');
      if(timer_now > 0) {
        this.timer = timer_now
      } else {
        this.timer = 25
      }
      console.log(timer_now);
    },

    methods: {
      save_timer() {
        localStorage.setItem('timer_now' , this.timer)
      },
      startTimer: function() {
        this.timer = setInterval(() => this.countdown(), 1000);
        this.resetButton = true;
      },
      stopTimer: function() {
        clearInterval(this.timer);
        this.timer = null;
        this.resetButton = true;
        this.save_timer();
      },
      padTime: function(time){
        return (time < 10 ? '0' : '') + time;
      },
      countdown: function() {
        if(this.totalTime > 0) {
          this.totalTime--;
        }
      }
    },
    computed: {
      minutes: function(){
        const minutes = Math.floor(this.totalTime / 60);
        return this.padTime(minutes);
      },
      seconds: function() {
        const seconds = this.totalTime - (this.minutes * 60);
        return this.padTime(seconds);
      },
    }
  }
</script>

<style scoped>
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(204,169,44, 0.4);
    }
    70% {
      box-shadow: 0 0 0 10px rgba(204,169,44, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(204,169,44, 0);
    }
  }

  .timer-container {
    background: url("../../assets/time-bg.jpg") no-repeat center;
    background-size: cover;
    font-size: 32px;
    height: 100%;
    padding-top: 140px;
    text-align: center;
  }

  .timer {
    align-items: center;
    background: #b52525;
    border: 3px solid #b52525;
    border-radius: 50%;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 220px;
    margin: 40px auto 0;
    width: 220px;
  }

  .timer-control {
    display: flex;
    font-size: 24px;
    justify-content: space-around;
    margin: 40px auto 0;
    max-width: 200px;
  }

  .control {
    cursor: pointer;
  }

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