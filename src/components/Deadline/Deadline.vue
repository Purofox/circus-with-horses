<template>
  <div class="deadline-timer">
    {{ $t("message.probation") }}
    <div class="deadline-counter">
      {{ months }}:{{ days }}:{{ hours }}:{{ minutes }}:{{ seconds }}
    </div>
  </div>
</template>

<script>
import moment from 'moment';

  export default {
    name: "Deadline",
    data() {
      return {
        actualTime: moment().format('X'),
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    },
    methods: {
      secondsCounter() {
        let component = this;
        component.actualTime = moment().format('X');
        setTimeout(function (){
          component.secondsCounter();
        }, 1000);
      },
      getDiffInSeconds() {
        return moment("2021-4-12 00:00:00").format('X') - this.actualTime;
      },
      compute() {
        let duration = moment.duration(this.getDiffInSeconds(), "seconds");
        this.years = duration.years() > 0 ? duration.years() : 0;
        this.months = duration.months() > 0 ? duration.months() : 0;
        this.days = duration.days() > 0 ? duration.days() : 0;
        this.hours = duration.hours() > 0 ? duration.hours() : 0;
        this.minutes = duration.minutes() > 0 ? duration.minutes() : 0;
        this.seconds = duration.seconds() > 0 ? duration.seconds() : 0;
      }
    },
    mounted() {
      this.compute();
      this.secondsCounter();
    },
    watch: {
      actualTime() {
        this.compute();
      }
    }
  };
</script>

<style>
  .deadline-timer {
    align-items: center;
    background: #000;
    border-radius: 50%;
    bottom: 0;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 200px;
    left: 2vw;
    margin: 20px auto;
    padding: 10px;
    position: absolute;
    text-align: center;
    width: 200px;
  }

  .deadline-counter {
    font-size: 24px;
    margin-top: 10px;
  }
</style>