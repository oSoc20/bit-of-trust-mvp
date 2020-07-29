<script>
  import Topbar from "../Components/Topbar.svelte";
  import VisContent from "../Components/VisContent.svelte";
</script>

<Topbar/>

<div id="main">
  <slot/>
  <div class="bg-gray-100 h-full shadow-inner">
    <div class="text-center w-full text-grey-darkest">
      <VisContent />
    </div>
  </div>
</div>

<style>
  #main {
    grid-template-columns: 24rem auto;
    display: grid;
  }
</style>
