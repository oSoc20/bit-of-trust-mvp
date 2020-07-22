<script>
import Topbar from "./Components/Topbar.svelte";
import Sidebar from "./Components/Sidebar.svelte";
import Content from "./Components/Content.svelte";

	let name = 'Finlay';
</script>

<svelte:head>
	<link rel="stylesheet" href="./style.css" />
</svelte:head>

<style></style>

<main>
<Topbar />
<Sidebar />
<Content />
</main>