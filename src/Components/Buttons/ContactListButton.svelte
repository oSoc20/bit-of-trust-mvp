<script>
import { Pencil } from 'svelte-hero-icons';
function nameAlert(){
  let alias = prompt("Change alias to:");
}
</script>
     
     <button on:click={nameAlert}
        class="bg-blue-500 hover:bg-blue-400 text-white focus:outline-none rounded-full shadow">
        <div class="p-2"><Pencil size="20"/></div>
</button>