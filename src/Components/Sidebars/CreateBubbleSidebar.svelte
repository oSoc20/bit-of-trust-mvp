<script>
  import { Plus } from 'svelte-hero-icons';
  import BubbleList from '../BubbleList.svelte';
  import Relationship from '../../git/relationship';
  const side_title = 'Invite people you trust into your bubble ';

  async function createBubble(){
    let name = document.getElementById("bubbleTextbox").value;
    if (name == ""){
      alert("Please provide a name for your bubble")
    } else {
      let relationship = await Relationship.create(name);
      await relationship.addToken(localStorage.getItem("token"));
      await relationship.commitChanges();
      await relationship.push();
    }
  }
</script>

<aside class="sidebar relative h-full min-h-screen p-8">
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
          aria-label="Full name" />
      </div>
    </form>

      <div class="text-right">
       <button on:click={createBubble} class="bg-gray-300 hover:bg-gray-400 text-xs text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
        <span class="pr-6 pl-6">Create Bubble</span>
        <Plus size="24" />
       </button>
       </div>
</aside>

<style>
  aside.sidebar {
    float: none;
    width: 100%;
  }
</style>
