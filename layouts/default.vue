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

body{
  --color-text: #284135;
  --color-bg: #ffffff;
	--color-link: #b07656;
	--color-link-hover: #000;
	--color-deco: #e4dbd6;
  --color-background-text: #eaeaea;
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
p{
  font-size: 1.2em;
  line-height: 1.5em;
}
h1 {
  font-size: 3em;
}

h2{
  font-size: 2.2em;
}

.container {
  width: 92vw;
  margin: 0 auto;
}

.italic{
  font-style: italic;
}

.boldy{
  font-weight: 600;
  font-style: italic;
  font-size: 1.1em; 
}

@media (min-width: 600px) {
  .container{
    width: 80vw;
  }
}

</style>
