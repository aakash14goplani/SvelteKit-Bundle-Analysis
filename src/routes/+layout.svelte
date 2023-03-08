<script>
	import Header from './Header.svelte';
	import './styles.scss';
</script>

<div class="app">
	<Header />

	<main>
		<section>
			<h1>SvelteKit Bundling Analysis</h1>
			<article>
				<slot />
			</article>
		</section>
	</main>

	<footer>
		<p>POC to analyze bundling in SvelteKit</p>
	</footer>
</div>

<style lang="scss">
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		
		main {
			flex: 1;
			display: flex;
			flex-direction: column;
			padding: 1rem;
			width: 100%;
			max-width: 64rem;
			margin: 0 auto;
			box-sizing: border-box;
	
			
			section {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				flex: 0.6;

				article {
					display: flex;
					flex-direction: column;
					width: 100%;
				}
			}
		}
		
		footer {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: 12px;
		}
	}
</style>
