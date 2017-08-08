<template>
	<!-- NAVBAR -->
	<nav class="navbar navbar-default" role="navigation">
		<div class="container">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-nav">
					<span class="sr-only">Toggle Navigation</span>
					<i class="fa fa-bars"></i>
				</button>
				<a href="index.html" class="navbar-brand navbar-logo">
					<span class="fa-stack fa-lg">
					  <i class="fa fa-square-o fa-stack-2x"></i>
					  <i class="fa fa-database fa-stack-1x"></i>
					</span>
					DLH Technology Solutions
				</a>
			</div>
			<!-- MAIN NAVIGATION -->
			<div id="main-nav" class="navbar-collapse collapse">
				<ul class="nav navbar-nav navbar-right">
					<li>
						<a href="#top">HOME</a>
					</li>
					<li>
						<a href="#about">ABOUT</a>
					</li>
					<li>
						<a href="#services">SERVICES</a>
					</li>
					<li>
						<a href="#contact">CONTACT US</a>
					</li>
				</ul>
			</div>
			<!-- MAIN NAVIGATION -->
		</div>
	</nav>
	<!-- END NAVBAR -->
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style lang="scss"></style>
