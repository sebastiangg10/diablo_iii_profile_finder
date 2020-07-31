<template>
  <div id="app">
    <Loadlayout v-if="isLoading">
      <BaseLoading/>
    </Loadlayout>

    <MainLayout v-else/>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import Loadlayout from './layouts/LoadLayout'
import MainLayout from './layouts/MainLayout'
import BaseLoading from '@/components/BaseLoading.vue'

export default {
  name: 'App',
  components: {
    MainLayout,
    Loadlayout,
    BaseLoading
  },
  computed: {
    // Uso: mapState(moduleName, { state })
    ...mapState('loading', { isLoading: 'isLoading' })
  }
}
</script>

<style lang="stylus">
#app
  padding 60px 0
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #ffffff
  background-color #15202b
</style>
