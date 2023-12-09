<template>
  <div className="dashboard-vans-container">
    <h1 className="host-van-list--title">Your listed vans</h1>
    <div className="host-van-list">
      <suspense>
        <template #default>
          <HostVans />
        </template>
        <template #fallback>
          <h2>Loading your vans...</h2>
        </template>
      </suspense>
    </div>
  </div>
</template>

<script setup lang="ts">
import HostVans from './HostVans.vue'
</script>

<style scoped></style>
