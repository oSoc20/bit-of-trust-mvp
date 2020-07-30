<script>
  import {CheckCircle, XCircle, ArrowNarrowRight} from 'svelte-hero-icons';
  import BubbleList from '../BubbleList.svelte';
  import {LocalData} from "../../git/localdata";

  const side_title = 'Invite people you trust into your bubble ';
  let name = "bitoftrust";

  import {params, goto} from '@sveltech/routify'
  import {InviteData} from "../../git/invitedata";
  import {inviteBaseUrl} from "../../git/config";
  import {stringToToken, tokenToString} from "../../git/token";

  let inviteInfo = InviteData.decodeInvite($params.invite);

  let accepting = false;
  $: accepting;

  async function acceptInvite() {
    accepting = true;
    let ourTokenString = localStorage.getItem("token");
    if (ourTokenString === null) {
      alert("Please sign up first");
      return;
    }
    let ourToken = stringToToken(ourTokenString);
    await InviteData.acceptInvite(inviteInfo, ourToken);
    $goto('/');
  }

  async function ignoreInvite() {
    //TODO
  }
</script>

<aside class="sidebar relative h-full min-h-screen text-center p-8 mt-48">
  <label class=" uppercase tracking-wide text-gray-900 text-xs font-bold">{inviteInfo.inviterAlias}</label>
  <label class=" uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
         for="grid-state">
    invited you to
  </label>
  <label class=" uppercase tracking-wide text-gray-900 text-xs font-bold">
    {LocalData.getRelationshipAlias(inviteInfo.relationshipName)}
  </label>
  <div class="mt-4 flex">
    <button
            class="mr-2 my-4 bg-teal-300 hover:bg-teal-400 text-xs text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            on:click={acceptInvite}>
      <CheckCircle size="24"/>
      {#if !accepting}
        <span class="pr-6 pl-4">Accept invite</span>
      {:else}
        <span>Accepting invite</span>
      {/if}
    </button>
    <button
            class="ml-2 my-4 bg-gray-300 hover:bg-gray-400 text-xs text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            on:click={ignoreInvite}>
      <XCircle size="24"/>
      <span class="pr-6 pl-4">Ignore invite</span>
    </button>
  </div>
</aside>

<style>
  aside.sidebar {
    float: none;
    width: 100%;
  }
</style>
