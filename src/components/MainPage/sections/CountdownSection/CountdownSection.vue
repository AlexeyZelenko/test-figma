<template>
  <section id="about-us" class="statistics-section">
    <div class="statistics-container">
      <h2 class="statistics-heading">
        Ваш надійний партнер у сфері нерухомості
      </h2>
      <p class="statistics-subheading">
        Ми - команда досвідчених професіоналів, які допоможуть вам з кожним етапом угоди з нерухомістю.
      </p>
      <div class="statistics-grid">
        <StatisticItem
            v-for="(stat, index) in statistics"
            :key="index"
            :value="stat.value"
            :label="stat.label"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StatisticItem from "./StatisticItem.vue";

interface Statistic {
  value: string;
  label: string;
}

export default defineComponent({
  name: "StatisticsSection",
  components: {
    StatisticItem,
  },
  data() {
    return {
      statistics: [
      { value: '+10', label: 'Років досвіду' },
      { value: '+500', label: 'Задоволених клієнтів' },
      { value: '+500', label: 'Укладених угод' },
      { value: '+10', label: 'Досвідчених агентів' },
      ] as Statistic[],
    };
  },
});
</script>

<style scoped>
.statistics-section {
  padding: 80px 0;
  color: white;
  text-align: center;
  background-color: #231a36;
}

.statistics-container {
  max-width: 734px;
  margin: 0 auto;
}

.statistics-heading {
  font-family: "Poppins", sans-serif;
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 24px;
}

.statistics-subheading {
  font-family: "Inter", sans-serif;
  font-size: 16px;
  color: #7b9292;
  margin-bottom: 64px;
}

.statistics-grid {
  display: flex;
  justify-content: space-around;
  max-width: 1000px;
  margin: 0 auto;
}

@media (max-width: 640px) {
  .statistics-section {
    padding: 40px 20px;
  }

  .statistics-heading {
    font-size: 32px;
  }

  .statistics-grid {
    flex-direction: column;
    gap: 30px;
  }
}
</style>
