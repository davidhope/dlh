
<template>
<!-- PORTFOLIO -->
<section id="portfolio">
	<div class="container">
		<div class="heading-center">
			<h2 class="section-heading">PORTFOLIO</h2>
			<p class="lead">What we have accomplished</p>
			<hr>
		</div>
		<!-- ITEM FILTERS -->
		<ul class="list-inline portfolio-item-filters">
			<li>
				<a class="active" href="#" data-filter="*">ALL</a>
			</li>
			<li>
				<a href="#" data-filter=".design">DESIGN</a>
			</li>
			<li>
				<a href="#" data-filter=".photography">PHOTOGRAPHY</a>
			</li>
			<li>
				<a href="#" data-filter=".ui">UI</a>
			</li>
			<li>
				<a href="#" data-filter=".ux">UX</a>
			</li>
		</ul>
		<!-- END ITEM FILTERS -->
		<!-- PORTFOLIO ITEM WRAPPER -->
		<div class="portfolio-item-wrapper">
			<ul class="portfolio-item-list portfolio-isotope portfolio-nospace list-col-4">
				<li class="portfolio-item design">
					<div class="overlay"></div>
					<div class="info">
						<h4 class="title">The Guitar</h4>
						<p class="brief-description">Graphic Design</p>
						<a href="#" class="btn">read more</a>
					</div>
					<div class="media-wrapper">
						<img src="assets/img/portfolio/800x800/work1.png" alt="This is the description">
					</div>
				</li>
				<li class="portfolio-item ux">
					<div class="overlay"></div>
					<div class="info">
						<h4 class="title">Skyscraper</h4>
						<p class="brief-description">UX Design</p>
						<a href="#" class="btn">read more</a>
					</div>
					<div class="media-wrapper">
						<img src="assets/img/portfolio/800x800/work3.png" alt="Portfolio Thumbnail">
					</div>
				</li>
				<li class="portfolio-item photography">
					<div class="overlay"></div>
					<div class="info">
						<h4 class="title">Heaven</h4>
						<p class="brief-description">Photography</p>
						<a href="#" class="btn">read more</a>
					</div>
					<div class="media-wrapper">
						<img src="assets/img/portfolio/800x800/work4.png" alt="Portfolio Thumbnail">
					</div>
				</li>
				<li class="portfolio-item photography ux">
					<div class="overlay"></div>
					<div class="info">
						<h4 class="title">Raining</h4>
						<p class="brief-description">Photography</p>
						<a href="#" class="btn">read more</a>
					</div>
					<div class="media-wrapper">
						<img src="assets/img/portfolio/800x800/work5.png" alt="Portfolio Thumbnail">
					</div>
				</li>
				<li class="portfolio-item photography ui">
					<div class="overlay"></div>
					<div class="info">
						<h4 class="title">The Edge</h4>
						<p class="brief-description">UI &amp; UX Design</p>
						<a href="#" class="btn">read more</a>
					</div>
					<div class="media-wrapper">
						<img src="assets/img/portfolio/800x800/work6.png" alt="Portfolio Thumbnail">
					</div>
				</li>
				<li class="portfolio-item photography">
					<div class="overlay"></div>
					<div class="info">
						<h4 class="title">The Light</h4>
						<p class="brief-description">Photography</p>
						<a href="#" class="btn">read more</a>
					</div>
					<div class="media-wrapper">
						<img src="assets/img/portfolio/800x800/work7.png" alt="Portfolio Thumbnail">
					</div>
				</li>
				<li class="portfolio-item photography">
					<div class="overlay"></div>
					<div class="info">
						<h4 class="title">Magical Tea</h4>
						<p class="brief-description">Photography</p>
						<a href="#" class="btn">read more</a>
					</div>
					<div class="media-wrapper">
						<img src="assets/img/portfolio/800x800/work8.png" alt="Portfolio Thumbnail">
					</div>
				</li>
				<li class="portfolio-item ui">
					<div class="overlay"></div>
					<div class="info">
						<h4 class="title">Skyscraper</h4>
						<p class="brief-description">UI Design</p>
						<a href="#" class="btn">read more</a>
					</div>
					<div class="media-wrapper">
						<img src="assets/img/portfolio/800x800/work3.png" alt="Portfolio Thumbnail">
					</div>
				</li>
			</ul>
		</div>
		
		<!-- END PORTFOLIO ITEM WRAPPER -->
	</div>
</section>
<!-- END PORTFOLIO-->
</template>

<script>
export default {
  name: 'Portfolio'
}
</script>

<style lang="scss"></style>