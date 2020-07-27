<script>
import Content from "../Components/Content.svelte";
import Sidebar from "../Components/Sidebar.svelte";

import BubbleList from "../Components/BubbleList.svelte";
import Topbar from "../Components/Topbar.svelte";
import CreateButton from "../Components/Buttons/CreateButton.svelte";



</script>

<Topbar />
<div id="main">
<Sidebar>
<!--Invite to bubble-->
  <CreateButton />

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

