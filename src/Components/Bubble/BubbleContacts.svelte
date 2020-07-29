<script lang="ts">
  import ContactItem from "./ContactItem.svelte";
  import type {Token} from "../../git/token";

  export let contacts = [];
  console.info("contacts", contacts);
</script>

<div class="mx-8">
  {#if contacts && contacts.length > 0}
    <ul>
      {#each contacts as {name} }
        <li>
          <ContactItem token={name}/>
        </li>
      {/each}
    </ul>
  {:else}
    <p>No contacts in this bubble.</p>
  {/if}
</div>
