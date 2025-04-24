<script setup>
import Timeline3 from "../../Timeline3.vue";
</script>

<template>
  <div class="desktop-block w-full mx-auto">
    <img src="/images/stepsBusinessWithUs.svg" alt="Steps Business With Us" class="w-full h-auto" />
  </div>
  <div class="mobile-block">
    <h1 class="flex justify-center font-bold text-2xl text-green-800">ЕТАПИ СПІВПРАЦІ З НАМИ</h1>
    <Timeline3 />
  </div>
</template>

<style scoped lang="scss">
img {
  width: 100%;
  height: auto;
  margin: 0 auto;
}
/* Стилі за замовчуванням (наприклад, для мобільної версії) */
.desktop-block {
  display: none; /* За замовчуванням прихований на мобільних */
}

.mobile-block {
  display: block; /* За замовчуванням видимий на мобільних */
  margin: 30px auto;
}

/* Медіа-запит для екранів середнього розміру та більше (наприклад, десктопи) */
@media (min-width: 768px) {
  .desktop-block {
    display: block; /* Показати на десктопах */
  }

  .mobile-block {
    display: none; /* Приховати на десктопах */
  }
}
</style>