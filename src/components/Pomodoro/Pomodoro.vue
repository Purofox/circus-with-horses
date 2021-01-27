<template>
  <div class="timer-container">
    <div class="settings">Set Interval</div>
    <div class="timer">
      {{sessionName}}
      <div class="timer-value">
        <span class="minute">{{ minutes }}</span>
          <span>:</span>
        <span class="seconds">{{ seconds }}</span>
      </div>
    </div>
    <div class="timer-control">
      <div class="control" @click="startTimer">Start</div>
      <div class="control" @click="stopTimer">Stop</div>
    </div>
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

    methods: {
      startTimer: function() {
        this.timer = setInterval(() => this.countdown(), 1000); //1000ms = 1 second
        this.resetButton = true;
      },
      stopTimer: function() {
        clearInterval(this.timer);
        this.timer = null;
        this.resetButton = true;
      },
      padTime: function(time){
        return (time < 10 ? '0' : '') + time;
      },
      countdown: function() {
        this.totalTime--;
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
    height: 250px;
    margin: 20px auto 0;
    width: 250px;
  }

  .timer-control {
    display: flex;
    justify-content: space-around;
    margin: 20px auto 0;
    max-width: 200px;
  }

  .control {
    cursor: pointer;
  }
</style>