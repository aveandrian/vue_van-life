<template>
  <main class="vans-page">
    <h1 class="vans-page--title">Explore our van options</h1>
    <suspense>
      <template #default>
        <VansPage />
      </template>
      <template #fallback>
        <h2>Loading vans.....</h2>
      </template>
    </suspense>
  </main>
</template>

<script setup lang="ts">
import VansPage from './VansPage.vue'
</script>

<style scoped></style>
