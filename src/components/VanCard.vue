<template>
  <router-link
    :to="{
      path: `/vans/${id}`,
      state: {
        search: searchParams.toString(),
        type: searchParams.type,
      },
    }"
    class="van"
  >
    <img :src="imageUrl" class="van--image" />
    <div class="van--description-section">
      <div>
        <h1 class="van--name">{{ name }}</h1>
        <div class="van--type" :class="type">
          {{ type.charAt(0).toUpperCase() + type.slice(1) }}
        </div>
      </div>
      <div class="van--price-section">
        <p class="van--price">${{ price }}</p>
        <p class="van--price-day">/day</p>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
defineProps<{
  id: string
  name: string
  price: number
  imageUrl: string
  type: string
  searchParams: Record<string, string | null>
}>()
</script>

<style scoped></style>
