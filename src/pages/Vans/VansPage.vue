<template>
  <div class="vans-page--header">
    <div class="vans-filters">
      <button
        @click="() => (searchParams.type = 'simple')"
        class="vans-filers--type filter-simple"
        :class="typeFilter === 'simple' ? 'selected' : null"
      >
        Simple
      </button>

      <button
        @click="() => (searchParams.type = 'luxury')"
        class="vans-filers--type filter-luxury"
        :class="typeFilter === 'luxury' ? 'selected' : null"
      >
        Luxury
      </button>

      <button
        @click="() => (searchParams.type = 'rugged')"
        class="vans-filers--type filter-rugged"
        :class="typeFilter === 'rugged' ? 'selected' : null"
      >
        Rugged
      </button>
      <button
        v-if="typeFilter"
        @click="clearSearchParams"
        class="clear-filters-btn"
      >
        Clear filters
      </button>
    </div>
  </div>
  <div class="vans-list">
    <VanCard
      v-for="van in desplayedVansData"
      :key="van.id"
      v-bind="van"
      :searchParams="searchParams"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { getVans } from '@/api'
import { useUrlSearchParams } from '@vueuse/core'
import VanCard from '@/components/VanCard.vue'
import { type Van } from '@/types/van.d'

const vansData: Van[] = await getVans()

const searchParams = useUrlSearchParams<Record<string, string | null>>()
const typeFilter = computed<string | null>(() => searchParams.type)

const desplayedVansData = computed<Van[]>(() => {
  return typeFilter.value
    ? vansData.filter((van: Van) => van.type === typeFilter.value)
    : vansData
})

function clearSearchParams(): void {
  searchParams.type = null
}
</script>

<style>
.vans-page {
  padding-inline: 1.4375rem;
  margin-bottom: 1.25rem;
}

.vans-page--header {
  max-width: 30rem;
}

.vans-page--title {
  font-weight: 700;
  font-size: 2rem;
  margin-top: 0rem;
  margin-bottom: 1.875rem;
}

.van--description-section {
  margin-top: 0.625rem;
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 100%;
}

.vans-filters {
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 0.9375rem;
}

.vans-filers--type {
  width: 6.5rem;
  height: 2.3125rem;
  background: #ffead0;
  border-radius: 0.3125rem;
  color: #4d4d4d;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-family: 'Inter', sans-serif;
  border: none;
}

.vans-filers--type:hover {
  cursor: pointer;
}

.clear-filters-btn {
  margin-left: auto;
  cursor: pointer;
  text-decoration: none;
  color: #4d4d4d;
  font-family: 'Inter', sans-serif;
  background-color: transparent;
  border: none;
}

.clear-filters-btn:hover {
  text-decoration: underline;
  font-weight: bold;
}

.vans-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  justify-items: center;
  gap: 2.5rem;
  margin-top: 3.5625rem;
}

.van {
  width: 100%;
  text-decoration: none;
  color: #161616;
}

.van--image {
  border-radius: 0.3125rem;
  width: 100%;
}

.van--name {
  font-weight: 600;
  font-size: 1.25rem;
  margin-top: 0rem;
  margin-bottom: 0.625rem;
}

.van--type {
  padding: 0.625rem 1.25rem;
  color: #ffead0;
  border-radius: 0.3125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.25rem;
  width: fit-content;
}

.simple,
.filter-simple:hover,
.filter-simple.selected {
  background: #e17654;
  color: #ffead0;
}
.rugged,
.filter-rugged:hover,
.filter-rugged.selected {
  background: #115e59;
  color: #ffead0;
}
.luxury,
.filter-luxury:hover,
.filter-luxury.selected {
  background: #161616;
  color: #ffead0;
}

.van--price,
.van--price-day {
  margin: 0rem;
  padding: 0rem;
  color: #161616;
}

.van--price {
  font-weight: 600;
  font-size: 1.25rem;
}

.van--price-day {
  font-family: 'Prompt', sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  text-align: right;
}

@media screen and (max-width: 59.375rem) {
  .vans-list {
    grid-template-columns: 1fr 1fr;
    gap: 5vw;
  }

  .van--name,
  .van--price,
  .van--type {
    font-size: 3.8vw;
  }
}
</style>
