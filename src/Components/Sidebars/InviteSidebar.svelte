<script>
  import { Chat, Printer, Mail, Clipboard } from 'svelte-hero-icons';
import BubbleList from '../BubbleList.svelte';
import CreateButton from "../Buttons/CreateButton.svelte";
  const side_title = 'Invite people you trust into your bubble ';
  let shown = true;
  import { url } from "@sveltech/routify";
import Relationship from '../../git/relationship';
import { onMount } from 'svelte';
import { LocalData } from '../../git/localdata';
import { InviteData } from '../../git/invitedata';
import user from '../../Data/SignUpController';
  import {stringToToken, tokenToString} from "../../git/token";
  const backToBubble = "< Back to bubble list"
  let selected ="";
  let link = "";
  let bubbleList = [];
  let bubbles = [];
  // Gain bubble list
  onMount(async () => {
    let tempList = [];
    for (const el of await Relationship.getAll()) {
      if(el && (await el.getTokens()).some(t => tokenToString(t) === localStorage.getItem("token"))) {
        let str = LocalData.getRelationshipAlias(el.name);
        tempList.push(str);
        bubbles.push(el);
      }
    }
    bubbleList = tempList;

    if(bubbleList.length > 0) {
      selected = 0;
      console.info("SELECTED", selected);
    }
  });


async function generateLink() {
  let token = stringToToken(localStorage.getItem("token"));
  if(!token){
    token = "Notokenowell"
  }
  console.info("rel", token);

  let inviteLink =InviteData.createInvite(bubbles[selected], token, "bit-of-trust.osoc.be/Invite/");
  link = inviteLink;
}
function copyToClipboard() {
  var copyText = document.getElementById("bubbleLink");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
}
</script>

<aside class="sidebar relative h-full min-h-screen shadow-md">
  <div class=" ml-6 pt-8"><CreateButton href={$url("../BubbleOverview")} text={backToBubble} /></div>
  <h1 class="text-blue-800 text-center text-2xl p-8">{side_title}</h1>
  <div class="p-8">
    <label
      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
      for="grid-state">
      Select your bubble
    </label>
    <select bind:value={selected}
      class="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      id="grid-state">
      {#each bubbleList as b, i}
        <option value={i}>{b}</option>
      {/each}

    </select>
    <p>
      <button on:click|once={generateLink}
        class="mt-4 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border
        border-gray-400 rounded shadow">
        Generate link
      </button>


    </p>
    <div class="mt-8 mb-8 w-full max-w-sm">
      <label
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        for="grid-state">
        Your invite link:
      </label>
      <div class="flex items-center border-b border-b-2 border-teal-500 py-2">
        <input
          class="appearance-none border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight
          focus:outline-none"
          type="text"
          placeholder="link"
          id="bubbleLink"
          aria-label="Full name"
          bind:value={link}/>
        <button on:click="{copyToClipboard}"
          class="border-none bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded
          inline-flex items-center">
          <Clipboard size="24" />
        </button>
      </div>
    </div>
    <label
      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2"
      for="grid-state">
      Share via:
    </label>

    <div class="px-2">
      <div class="text-center text-gray-700 font-bold text-xs flex -mx-2">
        <div class="">
          <button
            class="border-none bg-gray-300 hover:bg-gray-400 font-bold text-gray-800 py-2 px-8
            rounded text-center">
            <div>
              <Mail class="w-6 h-6 inline-block" size="24" />
            </div>
            <div>Email</div>
          </button>
          <button
            class="border-none bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-8
            rounded text-center">
            <div>
              <Chat class="w-6 h-6 inline-block" size="24" />
            </div>
            <div class="leading-relaxed">SMS</div>
          </button>
        </div>
      </div>
</aside>

<style>
  aside.sidebar {
    float: none;
    width: 100%;
  }
</style>
