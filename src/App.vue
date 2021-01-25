<template>
  <div id="app">
    <ToDoList/>
  </div>
</template>

<script>
import ToDoList from './components/ToDoList/ToDoList.vue'

export default {
  name: 'App',
  components: {
    ToDoList
  }
}
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
    font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 300;
  }

  #app {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
</style>
