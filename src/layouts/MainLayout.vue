<template>
  <div class="layout">
    <HeaderSection />
    <main class="main-content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import HeaderSection from '../components/MainPage/sections/HeaderSection/index.vue';

export default defineComponent({
  name: 'MainLayout',
  components: {
    HeaderSection
  }
});
</script>

<style lang="scss" scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  margin-top: 180px; // Высота хедера
}
</style> 