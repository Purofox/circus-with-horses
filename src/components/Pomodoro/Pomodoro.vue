<template>
  <div class="timer-container">
    <div class="timer">
      {{sessionName}}
      <div class="timer-value test">
        <span class="minute">{{ minutes }}</span>
          <span>:</span>
        <span class="seconds">{{ seconds }}</span>
      </div>
    </div>
    <div class="time-flex-container timer-control">
      <button class="control control--start" :disabled="isDisabled" @click="startTimer">Start</button>
      <button class="control control--reset" @click="resetTimer">Reset</button>
    </div>
    <div class="time-flex-container change-time" v-if="!isAstive">
      <input class="change-time__input" type="number" name="WorkSession" max="59" value="25" @input="changeTime($event.target.value)">
      <input class="change-time__input" type="text" name="RestSession" value="5">
    </div>
    <BackToMain/>
  </div>
</template>

<script>
import BackToMain from '../BackToMain/BackToMain.vue';
import $cookies from "core-js/internals/internal-state";

export default {
    name: "Pomodoro",
    components: {
      BackToMain
    },
    data() {
      return {
        timer: 25*60,
        restTimer: 5*60,
        sessionName: "Work",
        interval: '',
        edit: false,
        isDisabled: false,
        isAstive: false
      };
    },

    mounted() {
      let timer_now = this.$cookies.get('timer_now');
      if(timer_now && timer_now < this.timer) {
        this.timer = timer_now;
        this.startTimer();
      }
      window.addEventListener('beforeunload', this.save_timer);
    },

    methods: {
      changeTime(value) {
        this.timer = value * 60;
      },
      check_timer_completed() {
        if(this.timer === 0 && this.sessionName === 'Work') {
          this.$cookies.remove('timer_now');
          this.timer = this.restTimer;
          this.sessionName = 'Rest';
        } if (this.timer === 0 && this.sessionName === 'Rest') {
          this.$cookies.remove('timer_now');
          this.timer = 25*60;
          this.sessionName = 'Work';
        }
      },
      startTimer() {
        this.isDisabled = true;
        this.isAstive = true;
        this.interval = setInterval(() => {
          this.timer--;
          this.save_timer();
          this.check_timer_completed();
        }, 1000);
      },
      resetTimer() {
        clearInterval(this.interval);
        this.timer = 25*60;
        this.sessionName = 'Work';
        this.isDisabled = false;
        this.isAstive = false;
        this.$cookies.remove('timer_now');
      },
      padTime(time){
        return (time < 10 ? '0' : '') + time;
      },
      save_timer() {
        this.$cookies.set('timer_now', this.timer);
      },
      playMethod() {
        const audio = new Audio('../../assets/audio/alarm-clock-bell.mp3');
        audio.play();
      }
    },

    computed: {
      seconds() {
        const seconds = Math.trunc(this.timer) % 60;
        return this.padTime(seconds);
      },
      minutes() {
        const minutes = Math.trunc((this.timer) / 60) % 60;
        return this.padTime(minutes);
      }
    }
  };
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
    height: 220px;
    margin: 40px auto 0;
    width: 220px;
  }

  .time-flex-container {
    display: flex;
    font-size: 24px;
    justify-content: space-around;
    margin: 40px auto 0;
    max-width: 250px;
  }

  .change-time {
    flex-direction: column;
  }

  .control {
    background: #fff;
    border-radius: 50%;
    cursor: pointer;
    height: 100px;
    width: 100px;
  }

  .change-time__input {
    border: 0;
    border-radius: 5px;
    display: block;
    font-size: 18px;
    font-weight: 400;
    margin: 5px 0;
    padding: 10px;
  }
</style>