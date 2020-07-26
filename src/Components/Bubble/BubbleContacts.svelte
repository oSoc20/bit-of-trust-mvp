<script>
import ContactItem from "./ContactItem.svelte";

  export let contacts = [];
</script>


<div class="ml-24">
{#if contacts && contacts.length > 0}
<ul>

  {#each contacts as {name} }
  <li>
    <ContactItem class="pb-12" name={name} />
  </li>
  {/each}

</ul>
{:else}
  <p>No contacts in this bubble.</p>
{/if}
</div>