<script>
import Content from "../Components/Content.svelte";
import Sidebar from "../Components/Sidebar.svelte";

import BubbleList from "../Components/BubbleList.svelte";
import Topbar from "../Components/Topbar.svelte";
import CreateButton from "../Components/Buttons/CreateButton.svelte";
import { url } from "@sveltech/routify";

const signUpButtonText = "Sign Up";
const inviteButtonText = "Invite to Bubble";

</script>

<Topbar />
<div id="main">
<Sidebar>
<!--Invite to bubble--><div class="p-8 text-center">
  <CreateButton href={$url("../SignUp")} text={signUpButtonText} />
  <CreateButton href={$url( "../Invite")} text={inviteButtonText} />
</div>
  <BubbleList /> 
</Sidebar>
<Content >
</Content>
</div>
<style>
  #main {
    grid-template-columns: 24rem auto;
    display: grid;
  }
</style>

