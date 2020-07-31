<template>
  <div>
    <b-nav small align="start">
      <b-nav-item :to="{name: 'Home'}">Home</b-nav-item>
      <b-nav-item :to="{name: 'About'}">About</b-nav-item>
      <b-nav-item href="https://github.com/baumannzone/diablo3-vue-platzi" target="_blank">Github</b-nav-item>
      <b-nav-item href="https://github.com/sgg10/diablo_iii_profile_finder" target="_blank">Github_SGG</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: 'FootLinks'
}
</script>
