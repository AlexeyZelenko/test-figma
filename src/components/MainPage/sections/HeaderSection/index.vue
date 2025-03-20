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
  min-height: 100vh;

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 135px 100px;
    margin-top: 100px;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;

    @media (max-width: 1024px) {
      padding: 0 40px 60px;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 50px;
      padding: 0 20px 40px;
      margin-top: 40px;
      min-height: calc(100vh - 70px);
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

  @media (max-width: 768px) {
    height: 50px;
  }

  &--primary {
    background-color: #217bf4;
    color: white;
    box-shadow: 0px 7px 22px -6px rgba(32, 123, 244, 0.34);
    border: none;
    width: 162px;

    @media (max-width: 768px) {
      width: 140px;
    }
  }

  &--outline {
    background-color: transparent;
    border: 1px solid rgba(33, 123, 244, 0.5);
    color: #217bf4;
    font-weight: 500;
    width: 167px;

    @media (max-width: 768px) {
      width: 140px;
    }
  }

  &--small {
    height: 50px;
    width: 123px;
    font-size: 12px;
    font-weight: 600;

    @media (max-width: 768px) {
      width: 100px;
    }
  }
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90px;
  padding: 22px 135px 22px;
  border-bottom: 1px solid rgba(#217BF4, .1);
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    padding: 22px 40px;
  }

  @media (max-width: 768px) {
    padding: 15px 20px;
    height: 70px;
    flex-wrap: wrap;
  }

  &__container {
    display: flex;
    align-items: center;
    gap: 30px;

    @media (max-width: 768px) {
      gap: 15px;
    }
  }

  &__logo {
    display: flex;
    align-items: center;
  }

  &__logo-icon {
    position: relative;
    width: 34px;
    height: 34px;

    @media (max-width: 768px) {
      width: 28px;
      height: 28px;
    }
  }

  &__logo-text {
    margin-left: 10px;
    font-weight: 600;
    color: #2b2b39;
    font-size: 24px;
    line-height: 24px;

    @media (max-width: 768px) {
      font-size: 20px;
      line-height: 20px;
    }
  }
}
</style>