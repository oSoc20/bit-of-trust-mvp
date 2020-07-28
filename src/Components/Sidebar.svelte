<script>
  import { Chat, Printer, Mail, Clipboard } from 'svelte-hero-icons';

  const side_title = 'Invite people you trust into your bubble ';
  let shown = true;
</script>

<aside class="sidebar relative h-full min-h-screen">
 

 <slot />
</aside>

<style>
  aside.sidebar {
    float: none;
    width: 100%;
  }
</style>
