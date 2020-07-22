<script>
import Topbar from "./Components/Topbar.svelte";
import Sidebar from "./Components/Sidebar.svelte";

	let name = 'Finlay';
</script>

<svelte:head>
	<link rel="stylesheet" href="./style.css" />
</svelte:head>
<Topbar />
<h1>Hello {name}!</h1>


<Sidebar />