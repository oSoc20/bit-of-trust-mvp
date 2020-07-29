<script>
  import {CheckCircle, XCircle, ArrowNarrowRight} from 'svelte-hero-icons';
  import BubbleList from '../BubbleList.svelte';
  import {LocalData} from "../../git/localdata";

  const side_title = 'Invite people you trust into your bubble ';
  let name = "bitoftrust";

  import {params} from '@sveltech/routify'
  import {InviteData} from "../../git/invitedata";
  import {inviteBaseUrl} from "../../git/config";

  let inviteInfo = InviteData.decodeInvite($params.invite);
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
    <button class="mr-2 my-4 bg-teal-300 hover:bg-teal-400 text-xs text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
      <CheckCircle size="24"/>
      <span class="pr-6 pl-4">Accept invite</span>
    </button>
    <button class="ml-2 my-4 bg-gray-300 hover:bg-gray-400 text-xs text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
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
