<template>
  <div class="image-loader-container">
    <img
        :src="src"
        :alt="alt"
        @load="onLoad"
        @error="onError"
        v-show="!error"
        :class="{ 'loaded-image': loaded, 'hidden': !loaded }"
    />
    <div v-if="loading" class="spinner-container">
      <div class="spinner"></div>
    </div>
    <div v-if="error" class="error-message">
      Неможливо завантажити зображення.
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: '',
  },
});

const loading = ref(true);
const loaded = ref(false);
const error = ref(false);

const onLoad = () => {
  loading.value = false;
  loaded.value = true;
};

const onError = () => {
  loading.value = false;
  error.value = true;
};
</script>

<style scoped>
.hidden {
  display: none;
}

.image-loader-container {
  position: relative; /* Для позиционирования спиннера */
  display: inline-block; /* Или block в зависимости от вашего макета */
}

.loaded-image {
  display: block;
  width: 100%; /* Или задайте нужные размеры */
  height: auto;
}

.spinner-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7); /* Непрозрачный фон для спиннера */
  display: flex;
  justify-content: center;
  align-items: center;
}

.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;
}

.error-message {
  color: red;
  font-size: 0.9rem;
  text-align: center;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>