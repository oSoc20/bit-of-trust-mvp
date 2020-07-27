<script>
  import { Upload, ArrowNarrowRight } from 'svelte-hero-icons';
  import BubbleList from '../BubbleList.svelte';
  const side_title = 'Invite people you trust into your bubble ';
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
          placeholder="Name"
          aria-label="Full name" />
      </div>
    </form>
    <label
        class=" uppercase tracking-wide text-gray-700 text-xs font-bold"
        for="grid-state">
        Alias picture
      </label>

<section class="text-gray-700 body-font pt-2">
  <div class="container mx-auto flex py-2 items-center">
    <div>
      <img class="object-cover object-center rounded-full" alt="hero" src="https://dummyimage.com/600x600">
    </div>
    <div class=" md:w-1/2 pl-4 flex flex-col items-start text-left items-center text-center">
      <div class="justify-center">
       <button class="bg-gray-300 ml-4 mb-4 hover:bg-gray-400 text-xs text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
        <Upload size="24" />
        <span class="pl-2">Select from library</span>
       </button>
        <button class="bg-gray-300 ml-4 hover:bg-gray-400 text-xs text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
        <Upload size="24" />
        <span class="pl-2">Upload from computer</span>
       </button>      </div>
    </div>
  </div>
</section>
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
