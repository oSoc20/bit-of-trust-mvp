<script>
  export let name = "Unknown person"; // default name if no name is giving
  export let toggled = false;
  import { Plus } from 'svelte-hero-icons';
</script>


<div class="h-full flex border-gray-200 p-4 rounded-lg">
 
  <div class="flex-grow">
    <h2 class="">{name}</h2>
  </div>{#if toggled}
	-
{/if}

{#if !toggled}
	+
{/if}
</div>
