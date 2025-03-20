<template>
  <article class="statistic-item">
    <h3 class="statistic-value">{{ value }}</h3>
    <p class="statistic-label">{{ label }}</p>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "StatisticItem",
  props: {
    value: {
      type: Number,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
.statistic-item {
  text-align: center;
}

.statistic-value {
  font-family: "Poppins", sans-serif;
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 10px;
  color: white;
}

.statistic-label {
  font-family: "Inter", sans-serif;
  font-size: 14px;
  color: #7b9292;
  margin: 0;
}
</style>
