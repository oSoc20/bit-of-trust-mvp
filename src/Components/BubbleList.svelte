<!-- get all contacts -->
<!-- ability to delete contact-->
<!-- change contact "label"-->

<script>import BubbleCard from "./Bubble/BubbleCard.svelte";

  // get all contacts
  const allBubbles = [
    {
      name: "Friends",
      contacts: [
        {
          name: "Michiel Barrymore",
          pic: null
        },
        {
          name: "Yves Nova",
          pic: null
        },
        {
          name: "Tamara Tomoro",
          pic: null
        }
      ]
    },
    {
      name: "osoc ladies"
    }
  ];
  // if timey, async stuff probably  
</script>
<ul>
  
    {#each allBubbles as {name}}
      <li><BubbleCard name={name} /></li>
    {/each}
</ul>