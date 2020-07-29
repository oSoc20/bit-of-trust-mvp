<script lang="ts">
  import {Pencil} from 'svelte-hero-icons';
  import type {Token} from "../../git/token";
  import {LocalData} from "../../git/localdata";
  import {createEventDispatcher} from 'svelte';

  const dispatch = createEventDispatcher();

  export let token: Token;

  function nameAlert() {
    let alias = prompt("Change alias to:");
    LocalData.setTokenAlias(token, alias);
    dispatch('aliasChanged');
  }
</script>

<button on:click={nameAlert}
        class="bg-blue-500 hover:bg-blue-400 text-white focus:outline-none rounded-full shadow">
  <div class="p-2">
    <Pencil size="20"/>
  </div>
</button>
