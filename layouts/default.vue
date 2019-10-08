<template>
  <main>
    <Navbar />
    <div class="container" data-scroll>
      <nuxt />
    </div>
  </main>
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
@import url('https://fonts.googleapis.com/css?family=Chivo:300,400|Playfair+Display:400i,700i&display=swap');

body{
  --color-text: #284135;
  --color-bg: #ffffff;
	--color-link: #b07656;
	--color-link-hover: #000;
	--color-deco: #e4dbd6;
  color: var(--color-text);
	background-color: var(--color-bg);
  font-family: 'Chivo', sans-serif;
  font-size: 100%;
  word-spacing: 1px;
}


html {
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
.container {
  width: 80vw;
  margin: 0 auto;
}
</style>
