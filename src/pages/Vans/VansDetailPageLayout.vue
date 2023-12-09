<template>
  <main class="van--detail">
    <router-link :to="search" class="van--detail-back"
      >&larr;
      <span class="back--link">Back to {{ backText }} vans</span>
    </router-link>
    <suspense>
      <template #default>
        <VansDetailPage />
      </template>
      <template #fallback>
        <h2>Loading van's details...</h2>
      </template>
    </suspense>
  </main>
</template>

<script setup lang="ts">
import VansDetailPage from '@/pages/Vans/VansDetailPage.vue'
import { useBrowserLocation } from '@vueuse/core'

const location = useBrowserLocation()

const search: string = location.value.state?.type
  ? `/vans?type=${location.value.state.type}`
  : '/vans'
const backText: string = location.value.state?.type
  ? location.value.state.type
  : 'all'
</script>

<style>
.van--detail {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-inline: 1.4375rem;
  margin-bottom: 1.25rem;
}

.van--detail--content {
  display: flex;
  align-items: center;
  gap: 5vw;
}

.van-detail--description .van--type {
  width: fit-content;
}

.van--detail--image {
  width: 50%;
}

.van-detail--description {
  display: flex;
  flex-direction: column;
  gap: 1vh;
}

.van-detail--description .van--detail--text {
  margin-block: 5vh;
  width: 60%;
}

.van-detail--description .btn {
  width: 60%;
}

.van--detail-back {
  grid-column: 1 / span 2;
  text-decoration: none;
  color: #161616;
  margin-bottom: 1.25rem;
  max-width: fit-content;
}

@media screen and (max-width: 59.375rem) {
  .van--detail--content {
    flex-direction: column;
  }

  .van--detail--image {
    width: 100%;
  }

  .van-detail--description .van--name,
  .van-detail--description .van--price {
    font-size: 7vw;
  }

  .van-detail--description .van--detail--text {
    width: 100%;
    font-size: 3.8vw;
  }

  .van-detail--description .btn {
    width: 100%;
  }
}
</style>
