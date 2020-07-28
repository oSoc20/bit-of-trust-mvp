<script>
  import VisContent from "./VisContent.svelte";
</script>
<div class="bg-gray-100 h-full shadow-inner">
  <div class="text-center w-full text-grey-darkest">
    <VisContent />
    <slot></slot>
  </div>
</div>
