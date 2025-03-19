<script setup lang="ts">

</script>

<template>
  <div class="menu">
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
</template>

<style scoped lang="scss">
.menu {
  display: flex;
  align-items: center;
  gap: 30px;
  margin-left: 50px;

  &-item {
    font-weight: 500;
    color: #656464;
    font-size: 14px;
    letter-spacing: 0.14px;
    line-height: 14px;

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