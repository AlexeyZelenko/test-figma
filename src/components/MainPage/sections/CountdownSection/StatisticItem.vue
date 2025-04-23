<template>
  <div class="statistic-item">
    <div class="statistic-value">{{ value }}</div>
    <div class="statistic-label">{{ label }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "StatisticItem",
  props: {
    value: {
      type: [Number, String],
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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.statistic-value {
  font-family: "Poppins", sans-serif;
  font-size: 48px;
  font-weight: 600;
  color: #fff;
}

.statistic-label {
  font-family: "Inter", sans-serif;
  font-size: 16px;
  color: #7b9292;
}

@media (max-width: 640px) {
  .statistic-value {
    font-size: 36px;
  }
  
  .statistic-label {
    font-size: 14px;
  }
}
</style>
