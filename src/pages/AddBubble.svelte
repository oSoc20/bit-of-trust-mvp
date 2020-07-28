<script>
  import Content from "../Components/Content.svelte";

  import Topbar from "../Components/Topbar.svelte";

import CreateBubbleSidebar from "../Components/Sidebars/CreateBubbleSidebar.svelte";
  
  </script>

  
  <Topbar />
  <div id="main">

  <!-- Add bubble  button-->
  <!--Invite to bubble-->
 <CreateBubbleSidebar />
  <Content >
  </Content>
  </div>
  <style>
    #main {
      grid-template-columns: 24rem auto;
      display: grid;
    }
  </style>
  
  