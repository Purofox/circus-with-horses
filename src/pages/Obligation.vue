<template>
  <div class="ts-block">
    <h1>Trying to understand TypeScript</h1>
  </div>
</template>

<script>
export default {
  name: "Obligation",
  data() {
    someBool: '';
  },
  methods: {
    debounceMethod: _.debounce(() => {
      console.log('Debounce button clicked!');
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