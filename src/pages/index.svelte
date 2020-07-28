<script>
  import { metatags, goto } from '@sveltech/routify';
  import Topbar from '../Components/Topbar.svelte';
  import Content from '../Components/Content.svelte';
import InviteSidebar from '../Components/Sidebars/InviteSidebar.svelte';
import SignupSidebar from '../Components/Sidebars/SignupSidebar.svelte';
import CreateBubbleSidebar from '../Components/Sidebars/CreateBubbleSidebar.svelte';

import user from "../Data/SignUpController";
user.authenticate();
  let name = 'Bit of Trust';

  metatags.title = 'Bit of Trust';
  metatags.description = 'A proof of concept for trust connections on the web.';
  


</script>

<Topbar />
<div id="main">

  
    {#if !$user}
      {$goto('/SignUp')}
    {:else}
      {$goto('/BubbleOverview')}
    {/if}

  <Content />
</div>

<style>
  #main {
    grid-template-columns: 24rem auto;
    display: grid;
  }
</style>
