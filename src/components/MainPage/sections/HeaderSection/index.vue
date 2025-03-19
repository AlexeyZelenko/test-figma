<template>
  <header class="header">
    <!-- Navigation bar -->
    <nav class="navbar">
      <div class="navbar__container">
        <div class="navbar__logo">
          <div class="navbar__logo-icon">
            <img
                class="navbar__logo-subtract-1"
                alt="Subtract"
                src="/logo.svg"
            />
          </div>
          <span class="navbar__logo-text">Netbook</span>
        </div>
        <NavbarMenu />
      </div>
      <NavbarActions />
    </nav>

    <div class="header__container">
      <ContentSection />
      <Illustration />
    </div>
  </header>
</template>

<script>
import { defineComponent } from 'vue';
import Illustration from './Illustration.vue';
import ContentSection from './ContentSection.vue';
import NavbarActions from './NavbarActions.vue';
import NavbarMenu from './NavbarMenu.vue';

export default defineComponent({
  name: 'HeaderSection',
  components: {
    Illustration,
    ContentSection,
    NavbarActions,
    NavbarMenu
  }
});
</script>

<style lang="scss">
.header {
  position: relative;
  width: 100%;
  background: linear-gradient(to left, #e6effe, #FFFFFF);
  background-size: 100% 100%;

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 135px 100px;
    margin-top: 100px;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 50px;
      padding: 0 20px 100px;
    }
  }
}

.button {
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  border-radius: 14px;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: center;

  &--primary {
    background-color: #217bf4;
    color: white;
    box-shadow: 0px 7px 22px -6px rgba(32, 123, 244, 0.34);
    border: none;
    width: 162px;
  }

  &--outline {
    background-color: transparent;
    border: 1px solid rgba(33, 123, 244, 0.5);
    color: #217bf4;
    font-weight: 500;
    width: 167px;
  }

  &--small {
    height: 50px;
    width: 123px;
    font-size: 12px;
    font-weight: 600;
  }
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90px;
  padding: 22px 135px 22px;
  border-bottom: 1px solid rgba(#217BF4, .1);

  &__container {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  &__logo {
    display: flex;
    align-items: center;
  }

  &__logo-icon {
    position: relative;
    width: 34px;
    height: 34px;
  }

  &__logo-text {
    margin-left: 10px;
    font-weight: 600;
    color: #2b2b39;
    font-size: 24px;
    line-height: 24px;
  }
}
</style>