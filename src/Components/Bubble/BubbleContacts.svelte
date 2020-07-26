<script>
import ContactItem from "./ContactItem.svelte";

  export let contacts = [];
</script>


<div class="ml-16">
{#if contacts && contacts.length > 0}
<ul>

  {#each contacts as {name} }
  <li >
    
    <ContactItem  name={name} />
  </li>
  {/each}

</ul>
{:else}
  <p>No contacts in this bubble.</p>
{/if}
</div>