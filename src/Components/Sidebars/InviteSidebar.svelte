<script>
  import { Chat, Printer, Mail, Clipboard } from 'svelte-hero-icons';
 // import BubbleList from '../BubbleList.svelte';
  const side_title = 'Invite people you trust into your bubble ';
  let shown = true;
</script>

<aside class="sidebar relative h-full min-h-screen">
  <h1 class="text-blue-800 text-center text-2xl p-8">{side_title}</h1>
  <div class="p-8">
    <label
      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
      for="grid-state">
      Select your bubble
    </label>
    <select
      class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4
      pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      id="grid-state">
      <option>New Mexico</option>
      <option>Missouri</option>
      <option>Texas</option>
    </select>
    <p>
      <button
        class="mt-4 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border
        border-gray-400 rounded shadow">
        New bubble
      </button>

    </p>
    <form class="mt-8 mb-8 w-full max-w-sm">
      <label
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        for="grid-state">
        Your invite link:
      </label>
      <div class="flex items-center border-b border-b-2 border-teal-500 py-2">
        <input
          class="appearance-none border-none w-full text-gray-100 mr-3 py-1 px-2 leading-tight
          focus:outline-none"
          type="text"
          placeholder="link"
          aria-label="Full name" />
        <button
          class="border-none bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded
          inline-flex items-center">
          <Clipboard size="24" />
        </button>
      </div>
    </form>
    <label
      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2"
      for="grid-state">
      Share via:
    </label>

    <div class="px-2">
      <div class="text-center text-gray-700 text-xs flex -mx-2">
        <div class="w-1/3 px-2 flex col-2 space-y-4">
          <button
            class="border-none bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4
            rounded inline-flex items-center">
            <div>
              <Mail size="24" />
            </div>
            <div>Email</div>
          </button>
        </div>
        <div class="w-1/3 px-2">
          <button
            class="border-none bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4
            rounded inline-flex items-center">
            <div>
              <Chat size="24" />
            </div>
            <div>ext message</div>
          </button>
        </div>
        <div class="w-1/3 px-2">
          <div
            class="border-none bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4
            rounded flex items-center">
            <div class="inline-flex">
              <Printer size="24" />
            </div>
            <div class="inline-flex">Printer</div>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <div class="inline-flex">
            <Printer class=" w-12 h-12 inline-block" />
          </div>
          <h2 class="title-font font-medium text-3xl text-gray-900">1.3K</h2>
          <p class="leading-relaxed">Users</p>
        </div>
      </div>
    </div>
  </div>
  <!-- Invite link -->
  <!--
    todo:
      - ask what team backend needs
        - Do we provide link?
        - Do they need a name?



  -->

</aside>

<style>
  aside.sidebar {
    float: none;
    width: 100%;
  }
</style>
