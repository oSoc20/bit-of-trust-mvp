<script>
  let shown = true;
</script>

<style>
  aside.sidebar{
  position: fixed;
  height: 100%;
  background-color: greenyellow;
  min-width: 20%;
  
  }

  @media screen and (max-width: 700px) {
    aside.sidebar{
    text-align: center;
    float: none;
    width: 100%;
  }
}
</style>
<svelte:head>
	<link rel="stylesheet" href="../style.css" />
</svelte:head>


<aside class="sidebar">

</aside>