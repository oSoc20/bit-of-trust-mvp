<!-- get all contacts -->
<!-- ability to delete contact-->
<!-- change contact "label"-->

<script>import BubbleCard from "./Bubble/BubbleCard.svelte";
import BubbleContacts from "./Bubble/BubbleContacts.svelte";

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
  
  let toggleBubble = new Array(allBubbles.length).fill(false);

  const toggle = (i) =>{
    toggleBubble[i] = !toggleBubble[i];
  };
</script>
<ul>
    {#each allBubbles as {name, contacts = []}, i}
      <li><BubbleCard name={name}  /></li>
      {#if toggleBubble[i]}

        <BubbleContacts contacts={contacts} />
      <!-- To do, check data structure + think about GRASP principles -->
      {/if}
    {/each}
</ul>