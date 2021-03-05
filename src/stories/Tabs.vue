<template>
  <div id="tabs" class="container">

    <div class="tabs">
      <a @click="activetab='1'" :class="[ activetab === '1' ? 'active' : '' ]">Gork</a>
      <a @click="activetab='2'" :class="[ activetab === '2' ? 'active' : '' ]">Mork</a>
      <a @click="activetab='3'" :class="[ activetab === '3' ? 'active' : '' ]">Khorne</a>
      <a @click="activetab='4'" :class="[ activetab === '4' ? 'active' : '' ]">Tzeentch</a>
      <a @click="activetab='5'" :class="[ activetab === '5' ? 'active' : '' ]">The Emperor</a>
    </div>

    <div class="content">
      <div v-if="activetab ==='1'" class="tabcontent">
        <img src="" alt="">
        Gork is brutal but kunnin'
      </div>
      <div v-if="activetab ==='2'" class="tabcontent">
        Mork is kunnin' but brutal
      </div>
      <div v-if="activetab ==='3'" class="tabcontent">
        Need more skulls
      </div>
      <div v-if="activetab ==='4'" class="tabcontent">
        It's a sin to tell a lie
      </div>
      <div v-if="activetab ==='5'" class="tabcontent">
        What I'm even doing here? I told you I'm not a god
      </div>
    </div>

  </div>
</template>

<script>
import './tabs.css';
  export default {
    name: "my-tabs",
    data() {
      return {
        activetab: '1'
      }
    },
  }
</script>

