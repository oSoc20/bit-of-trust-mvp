<script lang="ts">
  import ContactListButton from "../Buttons/ContactListButton.svelte";
  import {tokenToString} from "../../git/token";
  import type {Token} from "../../git/token";
  import {LocalData} from "../../git/localdata";

  export let token: Token;

  let text;

  function updateText() {
    text = LocalData.isTokenKnown(token) ? LocalData.getTokenAlias(token) : tokenToString(token);
  }
  updateText();
</script>
<style>
  div {
    line-height: 40px;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .contact-name {
    margin: 0 0 0 1em;
  }
</style>
<div class="mt-3 mb-3 hover:bg-gray-100 rounded-full">
  <div class="flex rounded">
    <img alt="team" class="w-10 h-10 bg-gray-100 object-cover object-center rounded-full"
         src="https://dummyimage.com/84x84"/>

    <div class="contact-name w-full leading-tight pr-2">{text}</div>

    <ContactListButton token={token} on:aliasChanged={updateText}/>
    <!-- delete contact -->
  </div>
</div>
