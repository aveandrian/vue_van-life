<template>
  <main class="login-container">
    <h1>Sign in to your account</h1>
    <h3 v-if="message" :style="{ color: 'red' }">{{ message }}</h3>
    <h4 v-if="errorMessage" :style="{ color: 'red' }">{{ errorMessage }}</h4>
    <form class="login-form" @submit.prevent="handleFormSubmit">
      <input
        type="email"
        placeholder="Email address"
        name="email"
        v-model="email"
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        v-model="password"
      />
      <button class="login-btn" :disabled="isLoading">
        {{ isLoading ? 'Logging in...' : 'Log In' }}
      </button>
    </form>
    <p class="help">* Valid credentials: test@test.com:p123</p>
  </main>
</template>

<script setup lang="ts">
import { ref, computed, onBeforeMount } from 'vue'
import { useUrlSearchParams } from '@vueuse/core'
import { useRouter } from 'vue-router'
import { loginUser } from '@/api'

onBeforeMount(() => {
  localStorage.removeItem('loggedin')
})

const router = useRouter()

const searchParams = useUrlSearchParams()
const message = computed(() => searchParams.message)
const errorMessage = ref()

const email = ref()
const password = ref()
const isLoading = ref(false)

async function handleFormSubmit() {
  isLoading.value = true
  const pathname = searchParams.redirectTo || '/host'
  try {
    await loginUser({
      email: email.value,
      password: password.value,
    })

    localStorage.setItem('loggedin', 'true')

    return router.push(pathname as string)
  } catch (err: any) {
    errorMessage.value = err.message
    return
  } finally {
    isLoading.value = false
  }
}
</script>

<style>
.login-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2vh;
  padding-top: 2.5rem;
}

.login-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 31.25rem;
}

.login-form > input {
  width: 100%;
  max-width: 31.25rem;
  height: 3.125rem;
  border-color: rgba(0, 0, 0, 0.05);
  font-weight: 400;
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  text-indent: 0.625rem;
}

.login-form > input:focus {
  outline: none;
}

.login-form > input:first-of-type {
  border-radius: 0.375rem 0.375rem 0rem 0rem;
}

.login-form > input:last-of-type {
  border-radius: 0rem 0rem 0.375rem 0.375rem;
  border-top: none;
}

.login-btn {
  font-family: 'Inter', sans-serif;
  margin-top: 1.25rem;
  width: 100%;
  height: 3.4375rem;
  background: #ff8c38;
  border: none;
  border-radius: 0.375rem;
  font-weight: 700;
  font-size: 1rem;
  color: white;
  cursor: pointer;
}

.login-btn:hover {
  transform: translate(0.0625rem, 0.0625rem);
}

.login-btn:disabled {
  background-color: #aaaaaa;
  cursor: not-allowed;
}

.help {
  font-size: 0.8rem;
  color: #8e8e8e;
}

@media screen and (max-width: 59.375rem) {
  .login-container {
    width: 100%;
    padding-inline: 5vw;
    text-align: center;
  }
}
</style>
