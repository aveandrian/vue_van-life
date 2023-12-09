<template>
  <div className="dashboard-container">
    <div className="dashboard-income-container">
      <h2 className="dashboard-income-welcome-msg">Welcome!</h2>
      <div className="dashboard-income-links">
        <p>
          Income last
          <span :style="{ textDecoration: 'underline' }">30 days</span>
        </p>
        <router-link to="/host/income">Details</router-link>
      </div>
      <h1 className="dashboard-income-sum">$2,260</h1>
    </div>
    <div className="dashboard-reviews-container">
      <h3>Review score ⭐5.0/5.0</h3>
      <router-link to="/host/reviews">Details</router-link>
    </div>
    <div className="dashboard-vans-container">
      <div className="dashboard-vans-container-header">
        <h2 className="dashboard-vans-container-title">Your listed vans</h2>
        <router-link to="/host/vans">View all</router-link>
      </div>
      <div className="host-van-list">
        <suspense>
          <template #default>
            <HostDashboard />
          </template>
          <template #fallback>
            <h2>Loading your vans...</h2>
          </template>
        </suspense>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HostDashboard from './HostDashboard.vue'
</script>

<style>
.dashboard-income-container {
  padding-inline: 10vw;
  padding-block: 3vh;
  display: flex;
  flex-direction: column;
  gap: 1vh;
  background-color: #ffead0;
}

.dashboard-income-welcome-msg {
  font-weight: 700;
  font-size: 2.25rem;
}

.dashboard-income-links {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  font-size: 1rem;
  color: #4d4d4d;
  text-decoration: none;
}

.dashboard-income-links > a,
.dashboard-reviews-container > a,
.dashboard-vans-container-header > a {
  color: #161616;
  text-decoration: none;
}

.dashboard-income-links > a:hover,
.dashboard-reviews-container > a:hover,
.dashboard-vans-container-header > a:hover {
  text-decoration: underline;
}

.dashboard-income-sum {
  font-weight: 800;
  font-size: 3rem;
  margin: 0rem;
}

.dashboard-reviews-container {
  padding-inline: 10vw;
  padding-block: 3vh;
  background: #ffddb3;
  border-radius: 0.3125rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dashboard-vans-container {
  padding-inline: 10vw;
  padding-block: 3vh;
  display: flex;
  flex-direction: column;
  gap: 2vh;
}

.dashboard-vans-container-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dashboard-vans-container-title {
  font-weight: 700;
  font-size: 1.5rem;
}

.host-nav {
  display: flex;
  gap: 1.875rem;
  padding: 1.25rem;
}

.host-nav > a {
  font-weight: 500;
  color: #4d4d4d;
}

.host-nav > a:hover {
  color: #161616;
  font-weight: 700;
}

.host-van-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  justify-items: center;
  gap: 2.5rem;
}

.host-van-container {
  display: flex;
  align-items: start;
  flex-direction: column;
  text-decoration: none;
  color: #161616;
  gap: 0.9375rem;
  padding: 1.25rem;
  background: #ffffff;
  border-radius: 0.375rem;
}

.host-van-image {
  border-radius: 0.375rem;
  width: 100%;
}

.host-van-name {
  font-weight: 600;
  font-size: 1.25rem;
}

.host-van-price {
  font-weight: 500;
  font-size: 1rem;
  color: #4d4d4d;
}

.host-van {
  padding-inline: 1.25rem;
  margin-top: 2.5rem;
}

@media screen and (max-width: 59.375rem) {
  .host-van-list {
    width: 100%;
    grid-template-columns: 1fr;
  }

  .host-van-list .host-van-container {
    width: 100%;
    flex-direction: row;
  }

  .host-van-image {
    width: 30%;
  }
}
</style>
