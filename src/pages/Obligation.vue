<template>
  <div class="ts-block">
    <h1>Trying to understand TypeScript</h1>
    <button @click="debounceMethod">Debounce me</button>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  name: "Obligation",
  data() {
    someBool: '';
  },
  methods: {
    test() {
      console.log(this.lodash.random(20));
      console.log(this._.random(20));
      console.log(this.custom.random(20));
    },

    debounceMethod: _.debounce(() => {
      alert('Debounce is working!');
    }, 1000)
  }
};
</script>

<style scoped lang="scss">
  .ts-block {
    margin: 0 auto;
    width: 60vw;
  }
</style>