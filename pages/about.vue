<template>
  <div>
    <section class="align-center item">
      <p class="italic"><sup>“ </sup><b class="boldy">We travel</b>, initially, to lose ourselves; and we travel, next to find ourselves. We travel to open our hearts and eyes and learn more about the world than our newspapers will accommodate. We travel to bring what little we can, in our ignorance and knowledge, to those parts of the globe whose riches are differently dispersed.” <br/>― Pico Lyer </p>
      <p>
        Through and through, the joys of travel have been felt by generations.<br>
      What comes with the opportunity to experience the true beauty of a different place is a responsibility as a traveller.<br>
      The reality of profit being a driving force throughout the world is that it changes the way governments take care of their people, environment, and industry & labor laws.<br>
      It’s a fact that the travel industry does drive profit - but being the traveller, you get to choose which ethical values you admire and want to drive forward.<br>
      </p>
      <p><b class="boldy">Luckily for you</b>, I make following that path easier than it sounds.</p>
    </section>
    <section class="item">
      <div class="intersection-background item__img"></div>
    </section>
    <section class="flex-align-center item">
      <p>
        <b class="boldy">I’m Diana</b>, I’ve been travelling for the past five years and have been living and working abroad for the past three years.<br>
        Though I’m happy to assist you with any journey, I specialize in destinations across Europe, Southeast Asia, Australia, and North America.<br>
        <br>With a guarantee that I will never take sponsorships and never make commission, you are sure to get exactly what you want out of your traveling experience - every time. 
      </p>
      <img class="flex-image item__img" src="/ds-travel-agent.jpg" alt="Diana Sotak - Travel Agent"/>
    </section>
    <Footer />
  </div>
</template>

<script>
import imagesLoaded from 'imagesloaded'
import SmoothScroll from '~/plugins/SmoothScroll'
import Footer from '~/components/Footer'

export default {
  components: { Footer },
  mounted() {
		/***********************************/
		/********** Preload stuff **********/

		// Preload images
		const preloadImages = () => {
			return new Promise((resolve, reject) => {
					imagesLoaded(document.querySelectorAll('.item__img'), {background: true}, resolve);
			});
		};

    // And then..
    preloadImages()
    .then(() => {
			// Remove the loader
			// document.body.classList.remove('loading');
	
			// Initialize the Smooth Scrolling
			new SmoothScroll();
		});
  }
}

</script>

<style scoped>
section{
  margin: 2em 0;
}
.align-center {
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
p{
  margin-bottom: 2em;
}
.intersection-background{
  width: 100vw;
  height: 45vh;
  margin-left: -4vw;
  background: url(/portugal.jpg);
  background-size: cover;
  background-position: right; 
}

.flex-align-center {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4em 0;
}

.flex-image {
  margin-left: 0 auto;
  width: 65%;
}


@media (min-width: 600px) {
  section{
    margin: 0;
  }
  .intersection-background{
    margin-left: -10vw;
  }
  .flex-align-center{
    flex-direction: row;
  }
  .flex-align-center {
    margin: 0;
  }
  .flex-image{
    margin-left: 4em;
    width: 50%;
  }
}
</style>