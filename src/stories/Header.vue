<template>
  <header>
    <div class="wrapper">
      <div class="intro-part">
        <img src="./assets/orcs-logo.png" alt="" v-if="!user">
        <img src="./assets/adeptus.jpg" alt="" v-if="user">
        <div class="intro-part__text" v-if="!user">
          <h1>Waaargh!</h1>
          <p>Чтобы босс не постукал учим storybook</p>
        </div>
        <div class="intro-part__text" v-if="user">
          <h1>Слава Омниссии!</h1>
          <p>Он – бог в машине, источник всех знаний</p>
        </div>
      </div>
      <div class="button-block">
        <my-button size="small" @onClick="onLogout" label="Log out" v-if="user" />
        <my-button size="small" @onClick="onLogin" label="Log in" v-if="!user" />
        <my-button primary size="small" @onClick="onCreateAccount" label="Sign up" v-if="!user" />
      </div>
    </div>
  </header>
</template>

<script>
import './header.css';
import MyButton from './Button.vue';

export default {
  name: 'my-header',

  components: { MyButton },

  props: {
    user: {
      type: Object
    }
  },

  methods: {
    onLogin() {
      this.$emit('onLogin');
    },
    onLogout() {
      this.$emit('onLogout');
    },
    onCreateAccount() {
      this.$emit('onCreateAccount');
    }
  }
};
</script>
