<template>
  <div>
    <Navbar />
    <nuxt />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Chivo:300,400|Playfair+Display:700i');

html {
  font-family: 'Chivo', sans-serif;
  font-size: 100%;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

body{
  background: #ffffff;
  color: #284135;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-style: italic;
}
a{
  color: #284135;
}
h1 {
  font-size: 3em;
}
h2{
  font-size: 2.2em;
}

</style>
