<script>
	import Relationship from "../git/relationship";
	import user from "../Data/SignUpController";
import { url } from "@sveltech/routify";

	let userName = "Bit of Trust";
  const icon = 'I';
  //
</script>

<nav class="navbar flex items-center justify-between flex-wrap bg-white-500 p-4 pl-5 shadow-md">
  <div class="flex items-center flex-shrink-0 text-black mr-6">
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="36px" height="36px" viewBox="0 0 185.4 272.3" enable-background="new 0 0 185.4 272.3" xml:space="preserve">
<g>
	<path fill="#151414" d="M15,120.7c-0.7,20.1-1.6,40.2-1,60.2c0.3,10.1,1.3,20.2,3.8,30.1c6.8,27,26.9,44.8,53.6,47.4
		c24.1,2.4,49-12.5,60.4-36c6.2-12.7,7.4-26.4,7.5-40.2c0.1-13.8-0.9-27.5,0.4-41.3c2.5-25.9,13.5-47.2,33.7-63.7
		c3.6-2.9,7.6-2.7,10.2,0.3c2.7,3.1,2.5,7.1-1.3,10c-21.5,17.1-29.5,40-29.6,66.6c-0.1,13.8,0.9,27.6-0.2,41.3
		c-2.4,29.9-15.3,53.4-42.1,67.9C67.4,286.7,15.9,262.5,4.3,214c-3.6-15-4.4-30.2-4.2-45.5c0.4-37.7,1-75.4,1.5-113
		c0-1.3,0-2.7,0.2-4c0.7-4.2,3.8-6.8,7.6-6.2c4,0.6,6.1,3.2,6,7.2C15.3,60.1,15,67.8,15,75.4C14.9,90.5,15,105.6,15,120.7z"/>
	<path fill="#91D2C0" d="M178.7,55.1c0.6,15.8-11,30.7-29.5,30.8c-17.8,0.1-29.6-15.4-29.5-30.7c0.2-16.8,13.3-30.6,29.5-30.7
		C165.6,24.6,178.7,38.1,178.7,55.1z"/>
	<path fill="#151414" d="M104.9,85.9c0-21.7,0-43.5,0-65.2c0-0.8,0-1.7,0.1-2.5c0.3-4.3,2.6-6.8,6.8-7.1c3.9-0.3,6.9,3,6.9,7.5
		c-0.2,14.6-0.6,29.2-0.7,43.8c0,25.1-0.9,50.1-1.6,75.2c-0.4,13.6,0.7,26.8,9.1,38.4c2.5,3.4,1.2,7.4-2.1,9.5
		c-3.2,2.1-7,1.2-9.5-2.4c-6.7-9.6-10.5-20.3-11-32C101.9,129.3,104.2,107.6,104.9,85.9z"/>
	<path fill="#151414" d="M68.4,76.8c0-23.1,0-46.1,0-69.2c0-4.2,2.5-7.3,6.3-7.6c3.6-0.3,6.8,2.4,7.4,6.5c0.2,1.5,0.2,3,0.2,4.5
		c0,44.5,0,88.9,0,133.4c0,1.5,0.1,3-0.2,4.5c-0.8,3.9-3.1,6.2-7.3,6.1c-3.8-0.1-6.4-3.3-6.4-7.4C68.4,124,68.4,100.4,68.4,76.8
		C68.4,76.8,68.4,76.8,68.4,76.8z"/>
	<path fill="#151414" d="M48.7,84c0,18.4,0,36.8,0,55.3c0,2.4-0.1,4.6-1.7,6.6c-1.9,2.3-4.3,3.1-7.1,2.3c-2.8-0.8-4.6-2.6-4.9-5.6
		c-0.2-1.3,0-2.6,0-4c0-37,0-74,0-111c0-5.7,2.1-8.7,6.3-8.9c4.4-0.3,7.4,3,7.4,8.6C48.7,46.2,48.7,65.1,48.7,84z"/>
</g>
</svg>
{#if !$user}
		<span class="font-semibold ml-4 text-xl tracking-tight">{userName}</span>
{:else}
<div class="flex space-x-4">
<span class="font-semibold ml-4 text-xl tracking-tight">{$user}</span>
<a class="" href={$url("/SignOut")}>Sign out</a>
</div>
{/if}
  </div>

</nav>

<style>
.navbar {
	height: 72px;
	width: 100vw;
}
</style>