<template>
  <header class="header">
    <router-link to="/" class="header--title" @click="isOpened = false"
      >#VANLIFE</router-link
    >
    <nav class="header--links" :class="isOpened ? 'opened' : ''">
      <router-link to="/host" @click="isOpened = false" class="header--host"
        >Host</router-link
      >
      <router-link to="/about" @click="isOpened = false" class="header--about"
        >About</router-link
      >
      <router-link to="/vans" @click="isOpened = false" class="header--vans"
        >Vans</router-link
      >
      <router-link to="/login" @click="isOpened = false" class="header--login"
        ><img src="@/assets/user-icon.svg"
      /></router-link>
    </nav>
    <FontAwesomeIcon
      :icon="isOpened ? faXmark : faBars"
      class="menu-btn"
      @click="toggleIsOpened"
    />
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const isOpened = ref<boolean>(false)

function toggleIsOpened() {
  isOpened.value = !isOpened.value
}
</script>

<style scoped>
.router-link-active {
  text-decoration: 'underline';
  font-weight: 700;
}
</style>
