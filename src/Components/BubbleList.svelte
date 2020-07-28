<!-- get all contacts -->
<!-- ability to delete contact-->
<!-- change contact "label"-->

<script>
import {tokenToString} from "../git/token";
import BubbleCard from "./Bubble/BubbleCard.svelte";
import BubbleContacts from "./Bubble/BubbleContacts.svelte";
  import { Plus } from 'svelte-hero-icons';
import { onMount } from "svelte";
import Relationship from "../git/relationship";
  // get all contacts
  const allBubbles = [
    {
      name: "my-relationship",
      contacts: [
      ]
    },
    {
      name: "osoc ladies"
    }
  ];
let res;
onMount(async () => {
  let relationship = await Relationship.get("my-relationship");
  for (let token of await relationship.getTokens()) {
    let tokenString = tokenToString(token);
    allBubbles[0].contacts.push({"name": tokenString, "pic": null});
  }
});
  // get all contacts
 
  
  let toggleBubble = new Array(allBubbles.length).fill(false);

  const toggle = (i) =>{

    toggleBubble[i] = !toggleBubble[i];
  };
</script>
<div>
{#if allBubbles && allBubbles.length > 0}
<ul>
    {#each allBubbles as {name, contacts = []}, i}
      <li> <button class="text-left w-full" on:click={() => toggle(i)}><BubbleCard name={name}  role="region" toggled={toggleBubble[i]}   /> 
      </button></li>
      {#if toggleBubble[i]}
        <BubbleContacts contacts={contacts} />
      {/if}
    {/each}
</ul>
{/if}
</div>