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
    left: 5vw;
    position: absolute;
    top: 5vh;
  }
</style>