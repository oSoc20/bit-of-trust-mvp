<script>
import ContactItem from "./ContactItem.svelte";

  export let contacts = [];
</script>

<ul>

  {#each contacts as {name} }
  <li>
    <ContactItem name={name} />
  </li>
  {/each}

</ul>