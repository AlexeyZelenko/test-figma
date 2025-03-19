<template>
  <section class="countdown-section">
    <div class="countdown-container">
      <div class="content">
        <h2 class="title">
          Search through more than 11 million social media profiles
        </h2>
        <p class="description">
          Heepsy's search filters help you find exactly what you're looking for, and our influencer reports provide you with the metrics
        </p>
      </div>
      <div class="stats">
        <div v-for="(stat, index) in stats" :key="index" class="stat-item">
          <div class="stat-count">{{ stat.count }}</div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const stats = ref([
  { count: "2260", label: "Satisfied Brands" },
  { count: "1324", label: "Satisfied Clients" },
  { count: "3453", label: "Sponsored" },
  { count: "9786", label: "Completed" }
]);
</script>

<style lang="scss" scoped>
.countdown-section {
  width: 100%;
  padding: 4rem 0;
  background: url('/rectangle-70.svg') center/cover;

  .countdown-container {
    max-width: 64rem;
    margin: 0 auto;
    text-align: center;
    padding: 5rem 1rem;

    .content {
      margin-bottom: 6rem;

      .title {
        font-family: 'Poppins', Helvetica, sans-serif;
        font-weight: 600;
        color: white;
        font-size: 2.5rem;
        line-height: 3.125rem;
        margin-bottom: 2rem;
      }

      .description {
        font-family: 'Inter', Helvetica, sans-serif;
        font-weight: 400;
        color: #7b9191;
        font-size: 1rem;
        line-height: 1.75rem;
        max-width: 40rem;
        margin: 0 auto;
      }
    }

    .stats {
      display: flex;
      justify-content: center;
      gap: 4rem;
      flex-wrap: wrap;

      .stat-item {
        text-align: center;

        .stat-count {
          font-family: 'Poppins', Helvetica, sans-serif;
          font-weight: 600;
          color: white;
          font-size: 2.5rem;
          line-height: 2.5rem;
          margin-bottom: 0.75rem;
        }

        .stat-label {
          font-family: 'Inter', Helvetica, sans-serif;
          font-weight: 400;
          color: #7b9292;
          font-size: 0.875rem;
          line-height: 0.875rem;
        }
      }
    }
  }
}
</style>