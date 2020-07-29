<script>
  import SignupSidebar from '../Components/Sidebars/SignupSidebar.svelte';

  import user from '../Data/SignUpController';
  import { goto } from '@sveltech/routify';

  user.authenticate();

  if ($user) {
    $goto('/');
  }
</script>

<!-- Add bubble  button-->
<!--Invite to bubble-->
<SignupSidebar />
