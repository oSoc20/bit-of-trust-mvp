<script>
  export let name = "";
import CreateButton from "../Buttons/CreateButton.svelte";
import ContactListButton from "../Buttons/ContactListButton.svelte";
  import { Pencil } from 'svelte-hero-icons';

let setAlias = "set alias";</script>
<style>
div {
  line-height: 40px;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow:hidden;
}
.contact-name {
  margin: 0 0 0 1em;
}
</style>
<div class="flex mt-3 mb-3 hover:bg-gray-100 rounded-full">
  <div class="flex rounded">
  <img alt="team" class="w-10 h-10 bg-gray-100 object-cover object-center rounded-full" src="https://dummyimage.com/84x84" />
  <div class="contact-name w-full leading-tight pr-2">{name}</div><ContactListButton text="" />
  <!-- set alias-->
  <!-- delete contact -->
</div>
</div>