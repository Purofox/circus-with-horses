<template>
  <StressDate/>
</template>

<script>
import StressDate from '../components/StressDate/StressDate.vue';
import moment from 'moment';
  export default {
    name: "StressLevel",
    components: {
      StressDate
    },
    mounted() {
      const halloween = moment([2011, 9, 31]); // October 31st
      console.log(halloween.fromNow());

      const now = moment().add('days', 9);
      moment.lang('ru');
      console.log(now.format('dddd, MMMM DD YYYY'));
    }
  };
</script>