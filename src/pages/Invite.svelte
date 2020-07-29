<script>
  import {metatags, goto} from '@sveltech/routify';
  import AcceptInviteSidebar from '../Components/Sidebars/AcceptInviteSidebar.svelte'

  import user from "../Data/SignUpController";

  user.authenticate();
  let name = 'Bit of Trust';

  metatags.title = 'Bit of Trust';
  metatags.description = 'A proof of concept for trust connections on the web.';
</script>

<AcceptInviteSidebar/>
