<script>
  import { Router } from '@sveltech/routify';
  import { routes } from '@sveltech/routify/tmp/routes';
</script>

<Router {routes} />

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  body {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
  }
</style>
