<script>
  import { Router, Route } from "svelte-routing";
	import Home from "./pages/Home.svelte";

	  export let url = ""; //This property is necessary declare to avoid ignore the Router
</script>

<Router url="{url}">
	<!-- <nav>
		 <Link to="/">Home</Link>

	 </nav> -->
	 <div>
		 <Route path="/"><Home /></Route>
	 </div>
 </Router>