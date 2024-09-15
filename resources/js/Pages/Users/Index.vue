<template>

  <Head>
    <title>User</title>
    <meta content="Home Information" type="description" head-key="description">
  </Head>
  <!-- <div style="margin-top: 700px;">
    The current time is {{ time }}.
  </div>
  <Link class="text-blue-500" preserve-scroll>Refresh</Link> -->
  <!-- <ul>
    <li v-for="user in users" :key="user.id" v-text="user.name" />
  </ul> -->

  <div class="flex justify-between mb-6">
    <div class="flex items-center">
      <h1 class="text-4xl font-bold">Users</h1>
      <Link v-if="can.createUser" href="/users/create" class="text-blue-500 text-sm ml-3">create new user</Link>
    </div>
    <input v-model="search" type="text" class="border px-2 rounded-lg" placeholder="search...">
  </div>


  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <tbody class="bg-white divite-y divide-gray-200">
              <tr v-for="user in users.data" :key="user.id">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div>
                      <div class="text-sm font-medium text-gray-900">
                        {{ user.name }}
                      </div>
                    </div>
                  </div>
                </td>
                <td v-if="user.can.edit" class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <Link :href="`/users/${user.id}/edit`" class="text-indigo-900 hover:text-indigo-900">edit</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <!-- paginator -->
  <Pagination :links="users.links" />
</template>
<script setup>
// import { Inertia } from '@inertiajs/inertia';
import { router } from '@inertiajs/vue3';
import { ref, watch } from 'vue';
import Pagination from '../../Shared/Pagination.vue';
import { throttle } from 'lodash';

let props = defineProps({
  users: Object,
    filters: Object,
    can: Object,
})

let search = ref(props.filters.search);

watch(search, throttle(function(value) {
  router.get('/users', { search: value }, {
    // Keeps the current pagination and state
    preserveState: true,
    replace:true
  });
},500));

</script>