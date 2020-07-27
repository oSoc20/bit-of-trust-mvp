<script>
import Content from "../Components/Content.svelte";
import Sidebar from "../Components/Sidebar.svelte";

import BubbleList from "../Components/BubbleList.svelte";
import Topbar from "../Components/Topbar.svelte";
</script>

<Topbar />
<div id="main">
<Sidebar>
<!-- Add bubble  button-->
<!--Invite to bubble-->
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

