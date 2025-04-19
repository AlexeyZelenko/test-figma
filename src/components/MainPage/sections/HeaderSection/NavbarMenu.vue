<script>
export default {
  name: 'NavbarMenu'
}
</script>

<template>
  <nav class="nav-menu">
    <!-- <router-link to="/" class="nav-menu__item" active-class="nav-menu__item--active">
      Головна
    </router-link>
    <router-link to="/about" class="nav-menu__item" active-class="nav-menu__item--active">
      Про Нас
    </router-link>    
    <router-link to="/contacts" class="nav-menu__item" active-class="nav-menu__item--active">
      Контакти
    </router-link>
    <router-link to="/reviews" class="nav-menu__item" active-class="nav-menu__item--active">
      Відгуки
    </router-link> -->
  </nav>
</template>

<style lang="scss" scoped>
.nav-menu {
  display: flex;
  gap: 40px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    width: 100%;
  }

  &__item {
    color: #fff;
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    font-family: "Noto Sans", sans-serif;
    transition: color 0.3s;
    padding: 5px 0;
    position: relative;
    cursor: pointer;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: #fff;
      transition: width 0.3s;
    }

    &:hover,
    &--active {
      color: #fff;

      &::after {
        width: 100%;
      }
    }
  }
}
</style>