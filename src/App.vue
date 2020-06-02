<template>
  <div id="app">
    <img v-if="logo" src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    logo: false
  })
}
</script>

<style>
html {
  width: 100%;
  height: 100%;
}

body {
  margin: 0px;
  width: 100%;
  height: 100%;
}

.width100 {
  width: 100%;
}

.height100 {
  height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  width: 100%;
  height: 100%;
}
</style>
