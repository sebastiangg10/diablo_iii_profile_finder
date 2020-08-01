<template>
  <div class="home">
    <Hometitle/>
    <HomeForm/>
  </div>
</template>

<script>
import Hometitle from './HomeTitle'
import HomeForm from './HomeForm'

export default {
  name: 'Home',
  components: { Hometitle, HomeForm }
}
</script>
