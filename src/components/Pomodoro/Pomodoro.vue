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
    <div class="timer-control">
      <button class="control" :disabled="isDisabled" @click="startTimer">Start</button>
      <button class="control" @click="resetTimer">Reset</button>
    </div>
    <div v-if="showModal" class="dialog">
      Time to rest
      <div class="close" @click="showModal = false">x</div>
    </div>

    <router-link class="back-to-main" to="/">Back</router-link>
  </div>
</template>

<script>
const audio = new Audio('../assets/audio/alarm-clock-bell.mp3');
export default {
    name: "Pomodoro",
    data() {
      return {
        timer: 25*60,
        sessionName: "Work",
        interval: '',
        edit: false,
        showModal: false,
        isDisabled: false
      };
    },

    created() {
      let timer_now = localStorage.getItem('timer_now');
      if(timer_now < this.timer) {
        this.timer = timer_now;
        this.startTimer();
      }
      window.addEventListener('beforeunload', this.save_timer);
    },

    methods: {
      check_timer_completed() {
        if(this.timer === 0 && this.sessionName === 'Work') {
          audio.play();
          this.timer = 5*60;
          this.sessionName = 'Rest';
          this.save_timer();
        } if (this.timer === 0 && this.sessionName === 'Rest') {
          audio.play();
          this.timer = 25*60;
          this.sessionName = 'Work';
          this.save_timer();
        }
      },
      startTimer () {
        this.isDisabled = true;
        this.interval = setInterval(() => {
          this.timer--;
          this.check_timer_completed();
        },1000);
      },
      resetTimer () {
        clearInterval(this.timer);
        this.timer = 25*60;
        this.sessionName = 'Work';
      },
      padTime (time){
        return (time < 10 ? '0' : '') + time;
      },
      save_timer() {
        localStorage.setItem('timer_now' , this.timer);
      },
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
    },
  };
</script>

<style scoped>
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(204, 169, 44, .4);
    }

    70% {
      box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
    }

    100% {
      box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
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
    max-width: 250px;
  }

  .control {
    background: #fff;
    border-radius: 50%;
    cursor: pointer;
    height: 100px;
    width: 100px;
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

  .dialog {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: 0;
    bottom: 0;
    width: 25vw;
    height: 150px;
    background: #20b88e;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }

  .close {
    position: absolute;
    right: 5px;
    top: 5px;
  }
</style>