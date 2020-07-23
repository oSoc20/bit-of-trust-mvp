<script>
  const side_title = "Invite people you trust into your bubble!" ;
  let shown = true;
  import iconMail from 'heroicons-ui/icons/icon-mail.svg';
  import iconChat from 'heroicons-ui/icons/icon-chat.svg';
  import iconPrinter from 'heroicons-ui/icons/icon-printer.svg';
</script>

<style>
    aside.sidebar{
    float: none;
    width: 100%;
}
</style>
<svelte:head>
	<link rel="stylesheet" href="../style.css" />
</svelte:head>


<aside class="sidebar relative h-full min-h-screen">
  <h1 class="text-blue-800 text-center text-2xl p-8">{side_title}</h1>
  <div class="p-8">
<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Select your bubble
      </label>
<select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>New Mexico</option>
          <option>Missouri</option>
          <option>Texas</option>
        </select><p>
<button class="mt-4 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
  New bubble
</button>

  </p><form class="mt-8 mb-8 w-full max-w-sm">
    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Your invite link:
      </label>
  <div class="flex items-center border-b border-b-2 border-teal-500 py-2">
    <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="link" aria-label="Full name">
    <button class="flex-shrink-0 bg-grey-500 hover:bg-grey-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
      Copy link
    </button>
  </div>
</form>
  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" for="grid-state">
        Share via:
      </label>

  <div class="px-2">
  <div class="text-center text-gray-700 text-xs flex -mx-2">
    <div class="w-1/3 px-2">
      <div class="h-16">{iconMail} Email</div>
    </div>
    <div class="w-1/3 px-2">
     
      <div class="h-16">{iconChat} Text message</div>
    </div>
    <div class="w-1/3 px-2">
      <div class="h-16">{iconPrinter} Printer</div>
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