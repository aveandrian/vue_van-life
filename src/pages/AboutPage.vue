<template>
  <main class="about-page">
    <img class="about-page--image" src="@/assets/about-img.svg" />
    <div class="about-page--text">
      <h1 class="about-page--title">
        Don’t squeeze in a sedan when you could relax in a van.
      </h1>
      <p class="about-page--description">
        Our mission is to enliven your road trip with the perfect travel van
        rental. Our vans are recertified before each trip to ensure your travel
        plans can go off without a hitch. (Hitch costs extra 😉)
      </p>
      <p class="about-page--description">
        Our team is full of vanlife enthusiasts who know firsthand the magic of
        touring the world on 4 wheels.
      </p>
    </div>
    <div class="about-page--section">
      <h2 class="about-page--section-title">
        Your destination is waiting.<br />
        Your van is ready.
      </h2>
      <router-link to="/vans" class="about-page--section-btn"
        >Explore our vans</router-link
      >
    </div>
  </main>
</template>

<script setup lang="ts"></script>

<style>
.about-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3vh;
  color: #161616;
  background: #fff7ed;
}

.about-page--text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2vh;
  max-width: 31.25rem;
  margin-bottom: 1vh;
}

.about-page--title {
  font-weight: 700;
  font-size: 2rem;
}

.about-page--description {
  font-weight: 500;
  font-size: 1rem;
}

.about-page--section {
  display: flex;
  flex-direction: column;
  gap: 2vh;
  width: 28.125rem;
  background: #ffcc8d;
  border-radius: 0.3125rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1.875rem;
  margin-bottom: 1.25rem;
}

.about-page--section-btn {
  width: 10.875rem;
  height: 3.0625rem;
  background: #161616;
  border-radius: 0.625rem;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 1.0625rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}
.about-page--section-btn:hover {
  transform: translate(0.0625rem, 0.0625rem);
}

@media screen and (max-width: 59.375rem) {
  .about-page {
    padding-inline: 1.875rem;
  }

  .about-page--title {
    font-size: 1.8rem;
  }

  .about-page--description {
    font-size: 0.8rem;
  }

  .about-page--section {
    width: 100%;
    font-size: 0.8rem;
  }
}
</style>
