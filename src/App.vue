<template>
  <div id="app">
    <router-view :key="this.$route.path"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    test() {
      console.log(this.lodash.random(20));
      console.log(this._.random(20));
      console.log(this.custom.random(20));
    },
  }
};
</script>

<style>
  html,
  body {
    margin: 0;
    height: 100%;
    padding: 0;
  }

  :focus {
    outline: 0;
  }

  button {
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
    font-size: 100%;
    vertical-align: baseline;
    font-family: inherit;
    font-weight: inherit;
    color: inherit;
  }

  button:hover {
    cursor: pointer;
  }

  body {
    color: #4d4d4d;
    font: 16px 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 300;
  }

  #app {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
</style>
