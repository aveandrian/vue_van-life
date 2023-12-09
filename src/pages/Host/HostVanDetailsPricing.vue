<template>
  <div>
    <p>
      <span :style="{ fontWeight: 500, fontSize: '24px' }">
        ${{ hostVanDetail.price }} </span
      >/day
    </p>
  </div>
</template>

<script setup lang="ts">
import { Van } from '@/types/van'

defineProps<{
  hostVanDetail: Van
}>()
</script>

<style></style>
