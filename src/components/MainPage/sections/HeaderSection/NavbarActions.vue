<script setup lang="ts">
import { ref } from 'vue';

const isSearchVisible = ref(false);
</script>

<template>
  <div class="actions">
    <div class="actions__search" :class="{ 'actions__search--visible': isSearchVisible }">
      <button class="actions__search-toggle" @click="isSearchVisible = !isSearchVisible">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#686868" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </button>
      <div class="actions__search-content">
        <span class="actions__search-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#686868" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </span>
        <span class="actions__search-text">Search Hare...</span>
      </div>
      <img
          class="actions__search-line"
          alt="Line"
          src="/line-2.svg"
      />
    </div>

    <button class="button button--primary button--small">
      Log in
    </button>
  </div>
</template>

<style scoped lang="scss">
.actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 42px;

  @media (max-width: 1024px) {
    gap: 20px;
  }

  @media (max-width: 768px) {
    gap: 15px;
  }

  &__search {
    position: relative;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;

    &-toggle {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
      padding: 8px;

      @media (max-width: 768px) {
        display: block;
      }
    }

    &-content {
      display: flex;
      align-items: center;

      @media (max-width: 768px) {
        display: none;
        position: absolute;
        top: 100%;
        right: 0;
        background: white;
        padding: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
      }
    }

    &--visible {
      .actions__search-content {
        display: flex;
      }
    }

    &-icon {
      height: 12px;
      width: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
    }

    &-text {
      margin-left: 8px;
      font-weight: 400;
      color: #686868;
      font-size: 12px;
    }

    &-line {
      width: 105px;
      height: 1px;
      margin-top: 7px;

      @media (max-width: 768px) {
        display: none;
      }
    }
  }
}
</style>