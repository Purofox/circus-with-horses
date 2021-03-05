<template>
  <div id="tabs" class="container">

    <div class="tabs">
      <a v-on:click="activetab='1'" v-bind:class="[ activetab === '1' ? 'active' : '' ]">France</a>
      <a v-on:click="activetab='2'" v-bind:class="[ activetab === '2' ? 'active' : '' ]">Spain</a>
      <a v-on:click="activetab='3'" v-bind:class="[ activetab === '3' ? 'active' : '' ]">Germany</a>
      <a v-on:click="activetab='4'" v-bind:class="[ activetab === '4' ? 'active' : '' ]">Italy</a>
    </div>

    <div class="content">
      <div v-if="activetab ==='1'" class="tabcontent">
        <table>
          <tr><td class="legend">Area:</td><td class="data">640,679 km<sup>2</sup></td><td rowspan="5"><img class="map" src="https://drive.google.com/thumbnail?id=1edVL631_KOzd5zXzwrDNbn7bZDxqcRUQ"></td></tr>
          <tr><td class="legend">Population:</td><td class="data">67 million</td></tr>
          <tr><td class="legend">Capital:</td><td class="data">Paris</td></tr>
          <tr><td class="legend">Language:</td><td class="data">French</td></tr>
          <tr><td class="legend" valign="top">Flag:</td><td class="data"><img class="flag" src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/900px-Flag_of_France.svg.png" width="80"></td></tr>
        </table>
      </div>
      <div v-if="activetab ==='2'" class="tabcontent">
        <table>
          <tr><td class="legend">Area:</td><td class="data">505,990 km<sup>2</sup></td><td rowspan="5"><img class="map" src="https://drive.google.com/thumbnail?id=1AlVDaA3-wXNhqtXkfWoI3tD5cxZNfJu1"></td></tr>
          <tr><td class="legend">Population:</td><td class="data">47 million</td></tr>
          <tr><td class="legend">Capital:</td><td class="data">Madrid</td></tr>
          <tr><td class="legend">Language:</td><td class="data">Spanish</td></tr>
          <tr><td class="legend" valign="top">Flag:</td><td class="data"><img class="flag" src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/750px-Flag_of_Spain.svg.png" width="80"></td></tr>
        </table>
      </div>
      <div v-if="activetab ==='3'" class="tabcontent">
        <table>
          <tr><td class="legend">Area:</td><td class="data">357,386 km<sup>2</sup></td><td rowspan="5"><img class="map" src="https://drive.google.com/thumbnail?id=1JQyW1aThQxnlk3ZmogomTzhDkQGKbdC1"></td></tr>
          <tr><td class="legend">Population:</td><td class="data">83 million</td></tr>
          <tr><td class="legend">Capital:</td><td class="data">Berlin</td></tr>
          <tr><td class="legend">Language:</td><td class="data">German</td></tr>
          <tr><td class="legend" valign="top">Flag:</td><td class="data"><img class="flag" src="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1000px-Flag_of_Germany.svg.png" width="89"></td></tr>
        </table>
      </div>
      <div v-if="activetab ==='4'" class="tabcontent">
        <table>
          <tr><td class="legend">Area:</td><td class="data">301,340 km<sup>2</sup></td><td rowspan="5"><img class="map" src="https://drive.google.com/thumbnail?id=1_kQQJCEXyK-obQLNo5apywuWsolm3032"></td></tr>
          <tr><td class="legend">Population:</td><td class="data">60 million</td></tr>
          <tr><td class="legend">Capital:</td><td class="data">Rome</td></tr>
          <tr><td class="legend">Language:</td><td class="data">Italian</td></tr>
          <tr><td class="legend" valign="top">Flag:</td><td class="data"><img class="flag" src="https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/1500px-Flag_of_Italy.svg.png" width="80"></td></tr>
        </table>
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

