<script>
  export let name = "";
</script>

<style>
div {
  line-height: 40px;
  text-align: center;
}

.contact-name {
  margin: 0 0 0 1em;
}
</style>

<div class="flex mt-3 mb-3 ">
  <div class="flex">
  <img alt="team" class="w-8 h-8 bg-gray-100 object-cover object-center rounded-full" src="https://dummyimage.com/84x84" />
  <div class="contact-name">{name}</div>
</div>
</div>