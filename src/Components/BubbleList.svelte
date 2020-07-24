<!-- get all contacts -->
<!-- ability to delete contact-->
<!-- change contact "label"-->

<script>import BubbleCard from "./Bubble/BubbleCard.svelte";

  // get all contacts
  const allContacts = [
    {
      name: "Betty McWhile"
    },
    {
      name: "Ingrid Donno"
    }
  ];
  // if timey, async stuff probably  
</script>
<ul>
  
    {#each allContacts as {name}}
    <li><BubbleCard name={name} /></li>
    {/each}
</ul>