<template>
  <nav>
    <ul class="flex space-x-4">
      <li>
        <NavLink href="/" :active="$page.component === 'Home'">home</NavLink>
      </li>
      <li>
        <NavLink href="/users" :active="$page.component === 'Users'">users</NavLink>
      </li>
      <li>
        <NavLink href="/settings" :active="$page.component === 'Settings'">settings</NavLink>
      </li>
      <li>
        <NavLink href="/logout" method="post">logout</NavLink>
      </li>
    </ul>
  </nav>
</template>

<script>
import { Link } from '@inertiajs/vue3';
import NavLink from './NavLink.vue';

export default{
  components:{NavLink,Link},
};
</script>