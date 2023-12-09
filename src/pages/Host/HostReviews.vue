<template>
  <div class="reviews-container">
    <div class="reviews-header">
      <h1>Your reviews</h1>
      <p>
        Last
        <span :style="{ textDecoration: 'underline', fontWeight: 'bold' }"
          >30 days</span
        >
      </p>
    </div>
    <div class="reviews-overall">
      <div class="reviews-overall-header">
        <h1>5.0</h1>
        <p>⭐ overall rating</p>
      </div>
      <div class="rating-overview">
        <div class="rating-row">
          <p class="rating-text">5 stars</p>
          <div class="rating-line rating-5"></div>
          <p>100%</p>
        </div>
        <div class="rating-row">
          <p class="rating-text">4 stars</p>
          <div class="rating-line"></div>
          <p>0%</p>
        </div>
        <div class="rating-row">
          <p class="rating-text">3 stars</p>
          <div class="rating-line"></div>
          <p>0%</p>
        </div>
        <div class="rating-row">
          <p class="rating-text">2 stars</p>
          <div class="rating-line"></div>
          <p>0%</p>
        </div>
        <div class="rating-row">
          <p class="rating-text">1 star</p>
          <div class="rating-line"></div>
          <p>0%</p>
        </div>
      </div>
    </div>
    <h2>Reviews ({{ reviewsData.length }})</h2>
    <div v-for="review in reviewsData" class="review" :key="review.id">
      <div class="review-stars">
        <HostReviewsStars :rating="review.rating" />
      </div>
      <div class="review-author">
        <p class="review-author-name">{{ review.name }}</p>
        <p class="review-author-date">{{ review.date }}</p>
      </div>
      <div class="review-text">
        <p>{{ review.text }}</p>
      </div>
      <div class="review-divider"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HostReviewsStars from '@/components/HostReviewsStars.vue'
const reviewsData = [
  {
    rating: 5,
    name: 'Elliot',
    date: 'January 3, 2023',
    text: 'The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!',
    id: '1',
  },
  {
    rating: 5,
    name: 'Sandy',
    date: 'December 12, 2022',
    text: 'This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!',
    id: '2',
  },
]
</script>

<style>
.reviews-container {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1vh;
}

.reviews-header {
  display: flex;
  align-items: baseline;
  justify-content: left;
  gap: 1.25rem;
  margin-bottom: 1vh;
}

.reviews-header > p {
  color: #4d4d4d;
}

.reviews-overall {
  margin-bottom: 5vh;
}

.reviews-overall-header {
  display: flex;
  align-items: center;
  margin-bottom: 1vh;
}

.reviews-overall-header > h1 {
  margin-right: 0.625rem;
}

.rating-overview {
  display: flex;
  flex-direction: column;
  gap: 1vh;
}

.rating-row {
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  justify-content: space-between;
  align-items: center;
  column-gap: 2vw;
}

.rating-text {
  justify-self: end;
}

.rating-line {
  height: 0.625rem;
  background-color: #b9b9b9;
  max-width: 100%;
  border-radius: 0.3125rem;
}

.rating-5 {
  background-color: #ff8c38;
}

.review {
  display: flex;
  flex-direction: column;
  gap: 1vh;
}

.review-stars,
.review-author {
  display: flex;
  gap: 0.3125rem;
}

.review-author-name {
  font-weight: 600;
  font-size: 1rem;
}

.review-author-date {
  font-weight: 600;
  font-size: 1rem;
  color: #8c8c8c;
}

.review-text {
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.375rem;
}

.review-divider {
  background-color: #c7c7c7;
  height: 0.0625rem;
  width: 100%;
  margin-block: 1.25rem;
}
</style>
