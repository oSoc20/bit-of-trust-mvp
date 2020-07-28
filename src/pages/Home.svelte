<script>
	import Topbar from "../Components/Topbar.svelte";
	import Sidebar from "../Components/Sidebar.svelte";
	import Content from "../Components/Content.svelte";

	let name = "Finlay";
	let myStorage = window.localStorage;
	myStorage.setItem("myCat", "Tom");

	console.info("My Cat", myStorage.storage.getItem("myCat"));
</script>

<style>
	#main {
		grid-template-columns: 24rem auto;
		display: grid;
	}
</style>

<svelte:head>
	<link rel="stylesheet" href="./style.css" />
</svelte:head>

<Topbar />
<div id="main">

	<Sidebar />
	<Content />
</div>
