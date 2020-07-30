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
import { LocalData } from "../git/localdata";

let allBubbles = [];
let al2 = [];

  // get all contacts


  let toggleBubble = new Array(allBubbles.length).fill(false);

  const toggle = (i) =>{

    toggleBubble[i] = !toggleBubble[i];
  };


  onMount(async () => {
  let relationships = await Relationship.getAll();

  for (let relationship of relationships) {
    if(!relationship) {
      al2 = allBubbles;
      break;
    }

    let alias = LocalData.getRelationshipAlias(relationship.name);
    allBubbles.push({
      "name": alias,
      "contacts": []
    });
    console.info("allbub", allBubbles);
    for (let token of await relationship.getTokens()) {
      allBubbles[allBubbles.length - 1].contacts.push({
        "token": token,
        "pic": null
      });
    }
}
al2 = allBubbles;

});
</script>
<div>
{#if allBubbles }
<ul>
    {#each al2 as {name, contacts = []}, i}
      <li> <button class="text-left w-full" on:click={() => toggle(i)}><BubbleCard name={name}  role="region" toggled={toggleBubble[i]}   />
      </button></li>
      {#if toggleBubble[i]}
        <BubbleContacts contacts={contacts} />
      {/if}
    {/each}
</ul>
{/if}
</div>