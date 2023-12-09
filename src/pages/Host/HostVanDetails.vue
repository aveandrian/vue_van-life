<template>
  <div class="host-van-general-container">
    <div class="host-van-general">
      <img class="host-van-general-image" :src="vanDetail.imageUrl" />
      <div class="host-van-general-descr">
        <div class="van--type" :class="vanDetail.type">
          {{ vanDetail.type.charAt(0).toUpperCase() + vanDetail.type.slice(1) }}
        </div>
        <h1 class="van--name">{{ vanDetail.name }}</h1>
        <span>${{ vanDetail.price }}</span
        ><span>/day</span>
      </div>
    </div>
    <div class="host-van-general-content">
      <nav class="host-van-general-links">
        <router-link :to="`/host/vans/${vanDetail.id}`">Details</router-link>
        <router-link :to="{ name: 'HostVanDetailsPricing' }"
          >Pricing</router-link
        >
        <router-link :to="{ name: 'HostVanDetailsPhotos' }">Photos</router-link>
      </nav>
      <RouterView :hostVanDetail="vanDetail" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { getHostVans } from '@/api'
import { RouterView, useRoute } from 'vue-router'

const route = useRoute()

const vanDetail = await getHostVans(route.params.id as string)
</script>

<style scoped>
.router-link-exact-active {
  text-decoration: 'underline';
  font-weight: 700;
  color: '#161616';
}
</style>
