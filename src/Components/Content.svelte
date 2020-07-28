<script>
  import VisContent from "./VisContent.svelte";
</script>
<div class="bg-blue-200 h-full shadow-inner">
  <div class="text-center w-full text-grey-darkest">

    <VisContent />
    <slot></slot>
  </div>
</div>
