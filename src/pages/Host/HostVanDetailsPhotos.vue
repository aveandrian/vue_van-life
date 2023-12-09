<template>
  <div class="host-van-photos">
    <img :src="hostVanDetail.imageUrl" alt="Van image" />
  </div>
</template>

<script setup lang="ts">
import { Van } from '@/types/van'

defineProps<{
  hostVanDetail: Van
}>()
</script>

<style></style>
