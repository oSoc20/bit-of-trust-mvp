<script>
  export let href = "";
import { Pencil } from 'svelte-hero-icons';</script>
     
     <a
     href={href}
        class="bg-blue-500 hover:bg-blue-400 text-white rounded-full shadow">
        <div class="p-2"><Pencil size="20"/></div>
    </a>