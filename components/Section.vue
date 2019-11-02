<template>
  <div>
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
			console.log('done');
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
	padding: 0;
	counter-reset: figure; 
	margin-top: 4em;
}

.item {
	display: flex;
	margin: 0 auto;
	max-width: 100%;
	position: relative;
	will-change: transform;
	flex-direction: column;
	margin-bottom: 2em;
}

.item::before {
	counter-increment: figure;
	content: counter(figure, decimal-leading-zero);
	position: absolute;
	font-size: 7rem;
	color: var(--color-background-text);
	bottom: calc(100% - 3.5rem);
	left: -13px;
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
	width: 32em;
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


.item:first-child .item__caption {
	margin: 2em 1.5em 4em 2em;
}
.item:nth-child(2) .item__caption {
	margin: 0 1.5em 4em 2em;
}

.item__caption-title {
	font-weight: 400;
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


@media (min-width: 600px) {
	.content {
		margin-top: 0;
	}
  .item {
		display: flex;
		margin: 0 auto;
		max-width: 100%;
		position: relative;
		will-change: transform;
		margin-bottom:50vh; 
		flex-direction: row;
	}
	.item::before {
		font-size: 10rem;
		left: auto;
	}

	.item:first-child .item__caption {
		margin:3em 2em 0 2em;
		width: 30vw;
	}
	.item:nth-child(2) .item__caption {
		margin: 0;
		width: 30vw;
	}

	.item__caption-title {
		font-size: 2em;
	}

}
</style>