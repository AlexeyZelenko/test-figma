<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);
</script>

<template>
  <div class="menu-container">
    <button class="menu-toggle" @click="isMenuOpen = !isMenuOpen">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <div class="menu" :class="{ 'menu--open': isMenuOpen }">
      <span class="menu-item menu-item--active">Home</span>
      <div class="menu-item menu-item--with-dropdown">
        <span>Community</span>
        <img
            class="menu-dropdown-icon"
            alt="Vector"
            src="/vector-17.svg"
        />
      </div>
      <span class="menu-item">Blog</span>
      <span class="menu-item">Events</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.menu-container {
  @media (max-width: 768px) {
    order: 3;
    width: 100%;
  }
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  @media (max-width: 768px) {
    display: flex;
  }

  span {
    width: 100%;
    height: 2px;
    background-color: #2b2b39;
    transition: all 0.3s ease;
  }
}

.menu {
  display: flex;
  align-items: center;
  gap: 30px;
  margin-left: 50px;

  @media (max-width: 1024px) {
    margin-left: 20px;
    gap: 20px;
  }

  @media (max-width: 768px) {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    background: white;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    margin-left: 0;

    &--open {
      display: flex;
    }
  }

  &-item {
    font-weight: 500;
    color: #656464;
    font-size: 14px;
    letter-spacing: 0.14px;
    line-height: 14px;
    cursor: pointer;

    @media (max-width: 768px) {
      padding: 10px 0;
    }

    &--active {
      font-weight: 600;
      color: #2b2b39;
    }

    &--with-dropdown {
      display: flex;
      align-items: center;
    }
  }

  &-dropdown-icon {
    margin-left: 8px;
    width: 7px;
    height: 4px;
  }
}
</style>