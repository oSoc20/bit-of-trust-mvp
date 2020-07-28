<script>
  import { metatags } from '@sveltech/routify';
  import Topbar from '../Components/Topbar.svelte';
  import Content from '../Components/Content.svelte';
import InviteSidebar from '../Components/Sidebars/InviteSidebar.svelte';
import SignupSidebar from '../Components/Sidebars/SignupSidebar.svelte';
import CreateBubbleSidebar from '../Components/Sidebars/CreateBubbleSidebar.svelte';
  let name = 'Bit of Trust';

  metatags.title = 'Bit of Trust';
  metatags.description = 'A proof of concept for trust connections on the web.';
  

	let myStorage = window.localStorage;


	console.info("My Cat", myStorage.getItem("myCat"));
</script>

<Topbar />
<div id="main">
  <InviteSidebar />
  <Content />
</div>

<style>
  #main {
    grid-template-columns: 24rem auto;
    display: grid;
  }
</style>
