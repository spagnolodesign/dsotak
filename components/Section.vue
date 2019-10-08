<template>
  <section>
    <div class="content">				
				<div class="item">
					<div class="item__img-wrap"><div class="item__img item__img--t1"></div></div>
					<div class="item__caption">
						<h3 class="item__caption-title">Though the world has never been more connected, <br>Why does it still feel overwhelming to visit a new place?</h3>
					</div>
				</div>
				<div class="item">
					<div class="item__caption">
						<h3 class="item__caption-title">Whether it’s your first time traveling, or you don’t have time to plan to plan another fantasy trip- You should be overwhelmed by the cultural uniqueness, new relationships, and once-in-a-lifetime experiences - not by lack of preparation. </h3>
					</div>
					<div class="item__img-wrap"><div class="item__img item__img--t1"></div></div>
				</div>
      </div>
  </section>
</template>

<script>
import imagesLoaded from 'imagesLoaded';
import SmoothScroll from '~/plugins/SmoothScroll'

export default {
  mounted() {
		console.log('start');
		/***********************************/
		/********** Preload stuff **********/

		// Preload images
		const preloadImages = () => {
			return new Promise((resolve, reject) => {
					imagesLoaded(document.querySelectorAll('.item__img'), {background: true}, resolve);
			});
		};

		// And then..
		preloadImages().then(() => {
			// Remove the loader
			// document.body.classList.remove('loading');
	
			// Initialize the Smooth Scrolling
			new SmoothScroll();
		});
  }
}
</script>

<style scoped>

[data-scroll] {
	will-change: transform;
}

.content {
	display: flex;
	flex-direction: column;
	position: relative;
	align-items: center;
	padding: 12rem 0;
	counter-reset: figure; 
}

.item {
	display: flex;
	margin: 0 auto;
	max-width: 100%;
	position: relative;
	will-change: transform;
	margin-bottom:50vh; 
}

.item::before {
	counter-increment: figure;
	content: counter(figure, decimal-leading-zero);
	position: absolute;
	font-size: 10rem;
	color: var(--color-text);
	bottom: calc(100% - 3rem);
}

.item:nth-child(even)::before {
	right: 0;
}

.item__img-wrap {
	--aspect-ratio: 1/1.5;
	overflow: hidden;
	width: 500px;
	margin: 0 auto;
	padding-bottom: calc(50% / (var(--aspect-ratio)));
	max-width: calc(100% - 2em);
	will-change: transform;
}

.item:first-child .item__img-wrap {
	--aspect-ratio: 10/10;
	--image: url(/hp_1.jpg);
	width: 700px;
}

.item:nth-child(2) .item__img-wrap {
	--aspect-ratio: 7/10;
	--image: url(/hp_2.jpg);
	width: 420px;
}

.item:nth-child(2) .item__img {
	background-position: 69% 0%;
}

.item__img {
	--overflow: 40px;
	height: calc(100% + (2 * var(--overflow)));
	top: calc( -1 * var(--overflow));
	width: 100%;
	position: absolute;
	background-image: var(--image);
	background-size: cover;
	background-position: 50% 0%;
	will-change: transform;
}


.item__caption {
	width: 30vw;
	padding: 2rem 1rem;
}

.item__caption-title {
	font-weight: 400;
	font-size: 2em;
	margin: 0;
	will-change: transform;

}

.item__caption-copy {
	margin: 0;
}

.item__caption-copy::before {
	content: '__';
	line-height: 1;
	color: var(--color-link);
	font-weight: 700;
	font-size: 3rem;
	margin: 0 0 1rem;
	display: block;
}


</style>