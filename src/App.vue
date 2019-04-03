<template>
  <div id="app">
   <!-- <img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
    margin-top: 60px;
  }
  ul{
    padding-left: 0;
    list-style: none;
  }
  ul li img{
    max-width: 100%;
  }
  @font-face {
    font-family: 'FontAwesome';
    src: url('../static/fonts/fontawesome-webfont.woff?v=3.2.1') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Glyphicons Halflings';
    src: url('../static/fonts/glyphicons-halflings-regular.eot');
    src: url('../static/fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'), url('../static/fonts/glyphicons-halflings-regular.woff2') format('woff2'), url('../static/fonts/glyphicons-halflings-regular.woff') format('woff'), url('../static/fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular') format('svg');
  }
</style>
