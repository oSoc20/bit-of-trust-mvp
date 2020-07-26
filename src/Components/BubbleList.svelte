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
{#if allBubbles && allBubbles.length > 0}
<ul>
    {#each allBubbles as {name, contacts = []}, i}
      <li> <button class="w-full" on:click={() => toggle(i)}><BubbleCard name={name}  role="region" aria-expanded={toggleBubble[i]}   /> </button></li>
      {#if toggleBubble[i]}

        <BubbleContacts contacts={contacts} />

      {/if}
    {/each}
</ul>
{/if}