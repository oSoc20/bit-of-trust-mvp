<script>
  import { Upload, ArrowNarrowRight } from 'svelte-hero-icons';
  import BubbleList from '../BubbleList.svelte';
import BackToList from '../Buttons/BackToList.svelte';
  const side_title = 'Invite people you trust into your bubble ';
  let shown = true;
</script>

<aside class="sidebar relative h-full min-h-screen p-8">
  <BackToList />
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
          placeholder="Name"
          aria-label="Full name" />
      </div>
    </form>
    <label
        class=" uppercase tracking-wide text-gray-700 text-xs font-bold"
        for="grid-state">
        Alias picture
      </label>


</aside>

<style>
  aside.sidebar {
    float: none;
    width: 100%;
  }
</style>
