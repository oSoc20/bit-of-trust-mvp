<script>
  import {Plus} from 'svelte-hero-icons';
  import BubbleList from '../BubbleList.svelte';
  import Relationship from '../../git/relationship';
  import CreateButton from "../Buttons/CreateButton.svelte";
  import {url, goto} from '@sveltech/routify';
  import {stringToToken} from "../../git/token";

  const side_title = 'Invite people you trust into your bubble ';
  const backToBubble = "< Back to bubble list"

  let adding = false;
  $: adding;

  async function createBubble() {
    let name = document.getElementById("bubbleTextbox").value;
    if (name == "") {
      alert("Please provide a name for your bubble")
    } else {
      adding = true;
      let relationship = await Relationship.create(name);
      await relationship.addToken(stringToToken(localStorage.getItem("token")));
      await relationship.commitChanges();
      await relationship.push();
      $goto("/");
    }
  }
</script>

<aside class="sidebar relative h-full min-h-screen p-8">
  <div class=" ml-6 pt-8">
    <CreateButton href={$url("../BubbleOverview")} text={backToBubble}/>
  </div>
  <form class="mt-48 mb-4 w-full max-w-sm">
    <label
            class=" uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-state">
      Bubble Name
    </label>
    <div class="flex items-center border-b border-b-2 border-grey-500 py-2">
      <input
              class="appearance-none border-none w-full text-gray-700 mr-3 py-1 leading-tight
          focus:outline-none"
              type="text"
              placeholder="Name"
              id="bubbleTextbox"
              aria-label="Full name"/>
    </div>
  </form>

  <div class="text-right">
    <button on:click={createBubble}
            class="bg-gray-300 hover:bg-gray-400 text-xs text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
      {#if !adding}
        <span class="pr-6 pl-6">Create Bubble</span>
      {:else}
        <span>Creating bubble</span>
      {/if}
      <Plus size="24"/>
    </button>
  </div>
</aside>

<style>
  aside.sidebar {
    float: none;
    width: 100%;
  }
</style>
