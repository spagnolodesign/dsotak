<template>
  <nav class="nav">
    <nuxt-link :to="{name: 'index'}" class="nav__logo">
      FTLO <br />
      Ethical Travel
    </nuxt-link>
    <div class="nav__links">
      <nuxt-link :to="{name: 'about'}" class="nav__link">About</nuxt-link>
      <nuxt-link :to="{name: 'services'}" class="nav__link">Services</nuxt-link>
      <nuxt-link :to="{name: 'contact'}" class="nav__link">Contact</nuxt-link>
    </div>
  </nav>
</template>


<style scoped>
.nav {
  display: flex;
  width: 100vw;
  justify-content: space-between;
  padding: 1em;
  position: relative;
  background: #FFF;
  z-index: 1;
  border-bottom: 1px solid #e2e2e2;
}

.nav__logo{
  font-size: 1.2em;
  font-weight: 400;
  text-decoration: none;
}
.nav__links {
  text-align: right;
  width: 50vw;
}
.nav__link{
  text-decoration: none;
  cursor: pointer;
  pointer-events: all;
  margin-left: 0em;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 0.9em;
  position: relative;
  letter-spacing: 1.5px;
}

.nav__link:after {
  content: "";
  position: absolute;
  width: 0;
  height: 1.5px;
  bottom: 0;
  right: 0;
  background-color: #2c5240;
  visibility: hidden;
  -webkit-transition: all 0.5s cubic-bezier(0.25, 0.46, 0, 0.98);
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0, 0.98);
}
.nav__link:hover{
  color: #2c5240;
}
.nav__link:hover:after, .nuxt-link-active:after {
  visibility: visible;
  width: 100%;
  left: 0%;
}

@media (min-width: 600px) {
  .nav{
    position: fixed;
    z-index:1;
    background: transparent;
    border-bottom: none;
  }
  .nav__logo{
    font-size: 1em;
  }
}

</style>