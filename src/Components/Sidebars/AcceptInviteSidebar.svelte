<script>
  import { Upload, ArrowNarrowRight } from 'svelte-hero-icons';
  import BubbleList from '../BubbleList.svelte';
  const side_title = 'Invite people you trust into your bubble ';
  let name = "bitoftrust";
</script>

<aside class="sidebar relative h-full min-h-screen p-8">
 <form class="mt-24 mb-8 w-full max-w-sm">
      <label
        class=" uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        for="grid-state">
        Alias
      </label><label
        class="tracking-wide text-gray-300 pl-1 text-xs mb-2"
        for="grid-state">
        (you can change this later)
      </label>
      <div class="flex items-center border-b border-b-2 border-grey-500 py-2">
        <input
          class="appearance-none border-none w-full text-gray-700 mr-3 py-1 leading-tight
          focus:outline-none"
          type="text"
          bind:value={name}
          placeholder="Name"
          aria-label="Full name" />
      </div>
    </form>
    <label
        class=" uppercase tracking-wide text-gray-700 text-xs font-bold"
        for="grid-state">
        Alias picture
      </label>
      <div class="text-right mt-16">
       <button class="bg-teal-300 hover:bg-teal-400 text-xs text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
        <span class="pr-6 pl-6">Set up</span>
        <ArrowNarrowRight size="24" />
       </button>
       </div>
</aside>

<style>
  aside.sidebar {
    float: none;
    width: 100%;
  }
</style>
