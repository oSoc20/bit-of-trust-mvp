<script>
  import Content from "../Components/Content.svelte";
  import Sidebar from "../Components/Sidebar.svelte";

  import BubbleList from "../Components/BubbleList.svelte";
  import Topbar from "../Components/Topbar.svelte";
  import CreateButton from "../Components/Buttons/CreateButton.svelte";
  import {url} from "@sveltech/routify";
  import user from "../Data/SignUpController";

  user.authenticate();
  const createBubble = "Create bubble";
  const inviteButtonText = "Invite to Bubble";

</script>

<Sidebar>
  <!--Invite to bubble-->
  <div class="topbar">
    <CreateButton href={$url("../AddBubble")} text={createBubble}/>
    <CreateButton href={$url( "../InviteContact")} text={inviteButtonText}/>
  </div>
  <BubbleList/>
</Sidebar>

<style>
.topbar {
  margin: 1.2em 1.3em;
}
</style>

