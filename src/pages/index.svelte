<script>
  import { metatags } from '@sveltech/routify';
  import Topbar from '../Components/Topbar.svelte';
  import Sidebar from '../Components/Sidebar.svelte';
  import Content from '../Components/Content.svelte';

  let name = 'Finlay';

  metatags.title = 'Bit of Trust';
  metatags.description = 'A proof of concept for trust connections on the web.';
</script>

<svelte:head>
  <link rel="stylesheet" href="./style.css" />
</svelte:head>
<Topbar />
<div id="main">
  <Sidebar />
  <Content />
</div>

<style>
  #main {
    grid-template-columns: 24rem auto;
    display: grid;
  }
</style>
