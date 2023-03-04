<script lang="ts">
	import { onMount } from "svelte";
  import { goto } from '$app/navigation';

  onMount(() => {
    setTimeout(() => goto('/'), 3000)
  })
</script>
<h3>Error Page</h3>
<p>Redirecting back to home page...</p>