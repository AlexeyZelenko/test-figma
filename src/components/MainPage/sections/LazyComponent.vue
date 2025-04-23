<template>
  <div ref="container">
    <component
        v-if="isVisible"
        :is="component"
        v-bind="$attrs"
    />
    <div v-else class="placeholder" :style="{ height: placeholderHeight }"></div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';

export default defineComponent({
  name: 'LazyComponent',
  inheritAttrs: false,
  props: {
    component: {
      type: [Object, Function],
      required: true
    },
    threshold: {
      type: Number,
      default: 0.1
    },
    placeholderHeight: {
      type: String,
      default: '100px'
    }
  },
  setup(props) {
    const container = ref(null);
    const isVisible = ref(false);
    let observer = null;

    const handleIntersection = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        isVisible.value = true;

        // Отключаем наблюдатель после загрузки компонента
        if (observer) {
          observer.unobserve(container.value);
        }
      }
    };

    onMounted(() => {
      // Проверяем поддержку Intersection Observer
      if ('IntersectionObserver' in window) {
        try {
          observer = new IntersectionObserver(handleIntersection, {
            root: null, // viewport
            rootMargin: '200px', // Предзагрузка когда компонент приближается к зоне видимости
            threshold: props.threshold
          });

          if (container.value) {
            observer.observe(container.value);
          }
        } catch (error) {
          console.error('Ошибка при инициализации IntersectionObserver:', error);
          isVisible.value = true; // Fallback при ошибке
        }
      } else {
        // Fallback для браузеров без поддержки IntersectionObserver
        isVisible.value = true;
      }
    });

    onUnmounted(() => {
      if (observer) {
        try {
          observer.disconnect();
        } catch (error) {
          console.error('Ошибка при отключении IntersectionObserver:', error);
        }
      }
    });

    return {
      container,
      isVisible
    };
  }
});
</script>

<style scoped>
.placeholder {
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  width: 100%;
  transition: opacity 0.3s;
}
</style>