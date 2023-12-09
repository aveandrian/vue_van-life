<template>
  <router-link
    v-for="van in vansData"
    :to="`/host/vans/${van.id}`"
    class="host-van-container"
    :key="van.id"
  >
    <img :src="van.imageUrl" class="host-van-image" />
    <div class="host-van-description">
      <h1 class="host-van-name">{{ van.name }}</h1>
      <p class="host-van-price">${{ van.price }}/day</p>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { getHostVans } from '@/api'

const vansData = await getHostVans()
</script>

<style scoped></style>
