<template>
  <p v-for="(_, i) in rating" :key="i">⭐</p>
</template>

<script setup lang="ts">
defineProps<{
  rating: number
}>()
</script>

<style scoped></style>
