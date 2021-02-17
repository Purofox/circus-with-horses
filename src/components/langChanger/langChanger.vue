<template>
  <div class="locale-changer">
    <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
        {{ lang }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'langChanger',
  data() {
    return { langs: ['ru', 'en', 'fr'] };
  }
};
</script>

<style scoped>
  .locale-changer {
    cursor: pointer;
    left: 2vw;
    position: absolute;
    top: 4vh;
  }

  .locale-changer select {
    background: #0009;
    border-radius: 15%;
    color: #fff;
    font-size: 17px;
    height: 30px;
    padding: 0 5px;
    width: 50px;
  }
</style>