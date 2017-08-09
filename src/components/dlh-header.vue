<template>
	<!-- HERO UNIT -->
	<section class="hero-unit-animated">
		<div id="carousel-hero-animated" class="carousel">
			<!-- Slide Wrapper -->
			<div class="carousel-inner" role="listbox">
				<div class="item active">
					<div class="container">
						<div class="hero-left pull-left">
							<div class="hero-text">
								<h2 class="hero-heading animated fadeIn animation-delay-5">INNOVATIVE USER EXPERIENCE</h2>
								<p class="lead animated fadeIn animation-delay-7">Painstaking innovation to promise the best user experience possible.</p>
							</div>
							<a href="#about" class="btn btn-info btn-lg hero-button animated fadeIn animation-delay-12">LEARN MORE</a>
						</div>
						<div class="hero-right pull-right">
							<img src="assets/img/laptop.png" class="animated fadeInRight animation-delay-9" alt="Repute Business Theme">
						</div>
					</div>
				</div>
				<div class="item">
					<div class="container">
						<div class="hero-left pull-left">
							<div class="hero-text">
								<h2 class="hero-heading animated fadeIn animation-delay-5">RESPONSIVE DESIGNS</h2>
								<p class="lead animated fadeIn animation-delay-7">Web based applications that can be used across multiple devices</p>
							</div>
							<a href="#about" class="btn btn-info btn-lg hero-button animated fadeIn animation-delay-12">LEARN MORE</a>
						</div>
						<div class="hero-right pull-right">
							<img src="assets/img/devices.png" class="animated fadeInRight animation-delay-9" alt="Repute Business Theme">
						</div>
					</div>
				</div>
				<div class="item">
					<div class="container">
						<div class="hero-left pull-left">
							<div class="hero-text">
								<h2 class="hero-heading animated fadeIn animation-delay-5">QUALITY DATA</h2>
								<p class="lead animated fadeIn animation-delay-7">Outstanding UI leads to higher adaptibility and better data coming into your systems.</p>
							</div>
							<a href="#about" class="btn btn-info btn-lg hero-button animated fadeIn animation-delay-12">LEARN MORE</a>
						</div>
						<div class="hero-right pull-right">
							<img src="assets/img/hero-unit-obj3.png" class="animated fadeInRight animation-delay-9" alt="Repute Business Theme">
						</div>
					</div>
				</div>
			</div>
			<!-- End Slide Wrapper -->
			<!-- Controls -->
			<a class="left carousel-control" href="#carousel-hero-animated" role="button" data-slide="prev">
				<span class="fa fa-angle-left" aria-hidden="true"></span>
				<span class="sr-only">Previous</span>
			</a>
			<a class="right carousel-control" href="#carousel-hero-animated" role="button" data-slide="next">
				<span class="fa fa-angle-right" aria-hidden="true"></span>
				<span class="sr-only">Next</span>
			</a>
			<!-- End Controls -->
			<!-- Pagination -->
			<ol class="carousel-indicators">
				<li data-target="#carousel-hero-animated" data-slide-to="0" class="active"></li>
				<li data-target="#carousel-hero-animated" data-slide-to="1"></li>
				<li data-target="#carousel-hero-animated" data-slide-to="2"></li>
			</ol>
			<!-- End Pagination -->
		</div>
	</section>
	<!-- END HERO UNIT -->
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss"></style>
