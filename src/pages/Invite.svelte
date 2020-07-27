<script>
  import Content from "../Components/Content.svelte";

  import Topbar from "../Components/Topbar.svelte";

import InviteSidebar from "../Components/Sidebars/InviteSidebar.svelte";
  
  </script>

  
  <Topbar />
  <div id="main">

  <!-- Add bubble  button-->
  <!--Invite to bubble-->
    <InviteSidebar /> 
 
  <Content >
  </Content>
  </div>
  <style>
    #main {
      grid-template-columns: 24rem auto;
      display: grid;
    }
  </style>
  
  