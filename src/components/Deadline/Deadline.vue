<template>
  <div class="moment-test">
    <div class="deadline-timer">
      Конец испытательного срока {{ months }}:{{ days }}:{{ hours }}:{{ minutes }}:{{ seconds }}
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
      addOneSecondToActualTimeEverySecond () {
        let component = this;
        component.actualTime = moment().format('X');
        setTimeout(function(){
          component.addOneSecondToActualTimeEverySecond();
        }, 1000);
      },
      getDiffInSeconds () {
        return moment("2021-4-12 00:00:00").format('X') - this.actualTime;
      },
      compute () {
        let duration = moment.duration(this.getDiffInSeconds(), "seconds");
        this.years = duration.years() > 0 ? duration.years() : 0;
        this.months = duration.months() > 0 ? duration.months() : 0;
        this.days = duration.days() > 0 ? duration.days() : 0;
        this.hours = duration.hours() > 0 ? duration.hours() : 0;
        this.minutes = duration.minutes() > 0 ? duration.minutes() : 0;
        this.seconds = duration.seconds() > 0 ? duration.seconds() : 0;
      }
    },
    created () {
      this.compute();
      this.addOneSecondToActualTimeEverySecond();
    },
    watch: {
      actualTime () {
        this.compute();
      }
    }
  };
</script>