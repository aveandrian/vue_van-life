<template>
  <div class="host-van">
    <router-link to="/host/vans" class="van--detail-back"
      >&larr; <span class="back--link">Back to the vans</span></router-link
    >
    <suspense>
      <template #default>
        <HostVanDetails />
      </template>
      <template #fallback>
        <h2>Loading van's details...</h2>
      </template>
    </suspense>
  </div>
</template>

<script setup lang="ts">
import HostVanDetails from './HostVanDetails.vue'
</script>

<style>
.host-van-general-container {
  background: #ffffff;
  display: flex;
  padding: 1.25rem;
  margin-bottom: 1.25rem;
  margin-top: 1.25rem;
  gap: 5vw;
}

.host-van-general {
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 50%;
  gap: 1.25rem;
  margin-bottom: 1.25rem;
}

.host-van-general-image {
  width: 100%;
}

.host-van-general-content {
  flex: 1;
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  gap: 5vh;
}

.host-van-general-links {
  display: flex;
  gap: 1.875rem;
}

.host-van-general-links > a {
  text-decoration: none;
  color: #4d4d4d;
}

.host-van-general-links > a:hover {
  font-weight: bold;
  text-decoration: underline;
  color: #161616;
}

.host-van-details > p {
  margin-bottom: 1.25rem;
}

.host-van-details--type {
  display: flex;
  gap: 0.3em;
  margin-bottom: 1.25rem;
}

.host-van-details--type p::first-letter {
  text-transform: uppercase;
}

.host-van-photos {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  gap: 2rem;
}

.host-van-photos > img {
  width: 100%;
  border-radius: 0.3125rem;
}

@media screen and (max-width: 59.375rem) {
  .host-van-general-container {
    flex-direction: column;
  }

  .host-van-general {
    margin: 0;
    width: 100%;
  }

  .host-van-general-content {
    margin: 0;
  }
}
</style>
