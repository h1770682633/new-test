<template>
  <div id="app">
    <tab-bar></tab-bar>
  </div>
</template>
<script>
  import TabBar from "./components/tabBar/tabBar"
    export default {
        name: 'App',
        components:{
            TabBar
        },
    }
</script>
<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
