<script>
  import Content from "../Components/Content.svelte";
  import Sidebar from "../Components/Sidebar.svelte";
  import BackToList from "../Components/Buttons/BackToList.svelte";
  import BubbleList from "../Components/BubbleList.svelte";
  import Topbar from "../Components/Topbar.svelte";
import SignupSidebar from "../Components/Sidebars/SignupSidebar.svelte";
import VisContent from "../Components/VisContent.svelte";
  </script>
  <Topbar />
  <div id="main">

  <!-- Add bubble  button-->
  <!--Invite to bubble-->
    <SignupSidebar /> 
 <VisContent />
  <Content >
  </Content>
  </div>
  <style>
    #main {
      grid-template-columns: 24rem auto;
      display: grid;
    }
  </style>
  
  