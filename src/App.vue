<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h2>Belajar Websocket</h2>
</template>

<script>

export default {
  name: 'App',

  mounted(){
    window.Echo.channel('public').listen('Sendhai', (e) => {
      alert('helo')
      console.log(e);
    });

    // to connect the privatechannel
    window.Echo.private('test-channel.1').listen('PrivateTest', (e) => {
      console.log('go private');
      //code for displaying the serve data
      console.log(e); // the data from the server
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
