<script>
  import user from '../Data/SignUpController';
  import { redirect } from '@sveltech/routify';
  user.logout();
  $redirect('/SignUp');
</script>