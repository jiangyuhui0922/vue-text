<template>
  <div id="app">
    <!--<Hello></Hello>-->
    <!--<router-view></router-view>-->
    <index></index>
  </div>
</template>

<script>
import Hello from './components/Hello.vue'
import index from './components/index.vue'
export default {
  name: 'app',
  components: {
    Hello,
    index
  }
}
</script>

<style>

</style>
