<template>
  <div ref="statisticItemRef" class="statistic-item">
    <div class="statistic-value">+{{ animatedValue }}</div>
    <div class="statistic-label">{{ label }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch } from "vue";
import { gsap } from "gsap";

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
    duration: {
      type: Number,
      default: 1, // Длительность анимации в секундах
    },
  },
  setup(props) {
    const statisticItemRef = ref<HTMLElement | null>(null);
    const animatedValue = ref(0);
    const targetValue = ref(0);
    const isVisible = ref(false);

    onMounted(() => {
      targetValue.value = Number(props.value);
      observeElement();
    });

    watch(
      () => props.value,
      (newValue) => {
        targetValue.value = Number(newValue);
        if (isVisible.value) {
          animatedValue.value = 0;
          animateCounter();
        }
      }
    );

    const animateCounter = () => {
      gsap.to(animatedValue, {
        value: targetValue.value,
        duration: props.duration,
        ease: "power3.out",
        roundProps: "value",
      });
    };

    const observeElement = () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible.value) {
            isVisible.value = true;
            animateCounter();
          } else if (!entry.isIntersecting && isVisible.value) {
            isVisible.value = false;
            gsap.killTweensOf(animatedValue); // Остановить анимацию, если элемент уходит из видимости (опционально)
            animatedValue.value = 0; // Сбросить значение (опционально)
          }
        });
      });

      if (statisticItemRef.value) {
        observer.observe(statisticItemRef.value);
      }
    };

    return {
      statisticItemRef,
      animatedValue,
    };
  },
});
</script>

<style scoped>
/* Стили остаются прежними */
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