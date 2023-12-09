<template>
  <div class="host-van-details">
    <p>
      <span :style="{ fontWeight: 'bold' }">Name: </span
      >{{ hostVanDetail.name }}
    </p>
    <div class="host-van-details--type">
      <span :style="{ fontWeight: 'bold' }">Category: </span>
      <p>{{ hostVanDetail.type }}</p>
    </div>
    <p>
      <span :style="{ fontWeight: 'bold' }">Description: </span
      >{{ hostVanDetail.description }}
    </p>
    <p><span :style="{ fontWeight: 'bold' }">Visibility: </span>Public</p>
  </div>
</template>

<script setup lang="ts">
import { Van } from '@/types/van'

defineProps<{
  hostVanDetail: Van
}>()
</script>

<style></style>
