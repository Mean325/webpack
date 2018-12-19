<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Vue from 'Vue'
import {addClass} from 'common/js/dom'
export default {
  name: 'App',
  mounted() {
    this.$nextTick(function(){
      let body = document.body;
      addClass(body, 'yellow');
    })
  },
  computed: {

  },
  methods: {

  }
}
</script>

<style lang="scss">
$background: #CCCCCC;
body{
  background: $background;
}
.yellow{
  background: yellow;
}
#app {
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  // margin-top: 60px;
}
</style>
