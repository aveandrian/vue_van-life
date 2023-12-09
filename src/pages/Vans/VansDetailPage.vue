<template>
  <div class="van--detail--content">
    <img :src="vanDetail.imageUrl" class="van--detail--image" />
    <div class="van-detail--description">
      <div class="van--type" :class="vanDetail.type">
        {{
          vanDetail.type
            ? vanDetail.type.charAt(0).toUpperCase() + vanDetail.type.slice(1)
            : ''
        }}
      </div>
      <h1 class="van--name">{{ vanDetail.name }}</h1>
      <div>
        <span class="van--price">${{ vanDetail.price }}</span
        ><span>/day</span>
      </div>
      <p class="van--detail--text">{{ vanDetail.description }}</p>
      <router-link to="/" class="btn">Rent this van</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getVans } from '@/api'
import { type Van } from '@/types/van.d'
import { useRoute } from 'vue-router'
const route = useRoute()

const vanDetail: Van = await getVans(route.params.id as string)
</script>

<style></style>
