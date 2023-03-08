<script lang="ts">
	import Image from '$lib/components/Image.svelte';
</script>

<div class="root">
	<h3>You're on Overview Page.</h3>
	<p>Original Credits: https://github.com/hartwm/vercel-images-sveltekit</p>

	<div class="root__compare">
		<div class="root__compare__processed">
			<h4>Optimized Image</h4>
			<Image image={{ sourceUrl: '/rio.jpeg' }} width={640} height={640} />
		</div>
		<div class="root__compare__original">
			<h4>Original Image</h4>
			<div class="original-image">
				<img src="/rio.jpeg" width="640px" height="640px" alt="Original Img">
			</div>
		</div>
	</div>	
</div>

<svelte:head>
	<title>Overview</title>
</svelte:head>

<style lang="scss">
	.root {
		display: flex;
		flex-direction: column;

		&__compare {
			display: flex;
			flex-direction: row;
			margin-left: -8rem;

			&__processed, &__original {
				margin: 1rem;
			}
		}
	}
</style>