<script>
  const side_title = "Invite people you trust into your bubble " ;
  let shown = true;
</script>

<style>


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


<aside class="sidebar relative h-full min-h-screen">
  <h1 class="text-blue-800 text-2xl p-8">{side_title}</h1>
<div class="p-8">Select bubble
  <select name="cars" id="cars">
    <option value="bubble1">UX Design</option>
    <option value="bubble2">Food</option>
    <option value="bubble3">Sports</option>
    <option value="bubble4">Leisure</option>
  </select>
  <button id="newBubble">Create new bubble</button>
  
  Your bubble invite link
  <input type="text" id="bubbleLink" name="bubbleUrl"><button id="newBubble">Copy</button>
  
  Share via:
<ul>
    <li>Email</li>
    <li>Text message</li>
    <li>Printer</li>
</ul>
</div>
  <!-- Invite link -->
  <!-- 
    todo: 
      - ask what team backend needs
        - Do we provide link?
        - Do they need a name?



  -->
</aside>