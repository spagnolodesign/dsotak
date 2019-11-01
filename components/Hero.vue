<template>
  <div class="hero">
    <div class="hero__intro">
      <h1 class="hero__title">for the love of ethical travel</h1>
      <p class="hero__sub">travel assistance + advising</p>
    </div>
    <div>
      <img class="hero__picture" alt="compass" src="compass_2.jpg" />
    </div>
  </div>
</template>

<style scoped>
.hero {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.hero__intro {
  line-height: 1;
  z-index: 1;
}

.hero__title{
  margin-bottom: 0.3em;
}

.hero__sub{
  font-size: 1.8em;
  font-weight: 300;
}

.hero__picture{
  width: 420px;
  margin-left: -90px;
  z-index: 0;
}

@media (min-width: 600px) {
  .hero {
    flex-direction: row;
  }
  .hero__intro {
    line-height: 1.5;
    z-index: 1;
  }
  .hero__title{
    margin-bottom: 0;
  }
}
</style>