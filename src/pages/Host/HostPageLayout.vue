<template>
  <nav class="host-nav">
    <router-link :to="{ name: 'HostDashboardLayout' }">Dashboard</router-link>
    <router-link :to="{ name: 'HostIncome' }">Income</router-link>
    <router-link
      :to="{ name: 'HostVans' }"
      :class="{
        'router-link-exact-active': route.path.includes('/host/vans/'),
      }"
      >Vans</router-link
    >
    <router-link :to="{ name: 'HostReviews' }">Reviews</router-link>
  </nav>
  <router-view />
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style scoped>
.router-link-exact-active {
  text-decoration: 'underline';
  font-weight: 700;
  color: '#161616';
}
</style>
