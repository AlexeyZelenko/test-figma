<template>
  <header class="header">
    <div class="header__top">
      <div class="navbar__logo">
        <div class="navbar__logo-icon">
          <img
              class="navbar__logo-subtract-1"
              alt="Логотип"
              src="/images/logo.png"
          />
        </div>          
      </div>
      <div class="header__contacts">
        <a href="mailto:mn.ck.ua@gmail.com" class="header__contact-item">
          <i class="fas fa-envelope"></i>
          mn.ck.ua@gmail.com
        </a>
        <a href="tel:+380634735500" class="header__contact-item">
          <i class="fas fa-phone"></i>
          +38 063 473 55 00
        </a>
        <a href="tel:+380674735500" class="header__contact-item">
          <i class="fas fa-phone"></i>
          +38 067 473 55 00
        </a>
        <router-link to="/register" class="header__contact-item register-button">
          <i class="fas fa-user-plus"></i>
          Реєстрація
        </router-link>
      </div>
    </div>

    <nav class="navbar">
      <div class="navbar__container">
        <NavbarMenu />
      </div>
    </nav>

    <div class="header__container">
      <ContentSection />
      <Illustration />
    </div>
  </header>
</template>

<script>
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import Illustration from './Illustration.vue';
import ContentSection from './ContentSection.vue';
import NavbarMenu from './NavbarMenu.vue';

export default defineComponent({
  name: 'HeaderSection',
  components: {
    Illustration,
    ContentSection,
    NavbarMenu,
    RouterLink
  }
});
</script>

<style lang="scss">
.header {
  position: relative;
  width: 100%;  
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  
    
  &__top {
    padding: 15px 235px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    border-bottom: 1px solid #e5e5e5;
    background-image: url(/images/top_background.png);
    background-repeat: repeat-x;
    background-position: bottom;

    @media (max-width: 1024px) {
      padding: 15px 40px;
    }

    @media (max-width: 768px) {
      padding: 10px 20px;
      flex-direction: column;
      gap: 15px;
    }
  }

  &__contacts {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    gap: 20px;
    align-items: end;   

    @media (max-width: 1024px) {
      gap: 15px;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 10px;
    }
  }

  &__contact-item {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #048;
    list-style-type: none;  
    font-family: "Noto Sans", sans-serif;
    font-weight: 700;
    transition: color 0.3s;
    font-size: 14px;
    line-height: 1.42857143;
    text-decoration: none;

    &:hover {
      color: #217bf4;
    }

    i {
      font-size: 16px;
      color: #217bf4;
    }

    &.register-button {
      background-color: #6ea2e6;
      color: white;
      padding: 8px 16px;
      border-radius: 8px;
      transition: background-color 0.3s;

      &:hover {
        background-color: darken(#6ea2e6, 10%);
        color: white;
      }

      i {
        color: white;
      }
    }
  }

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 135px;    
    margin: 50px 0;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    flex: 1;

    @media (max-width: 1024px) {
      padding: 0 40px;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 50px;
      padding: 0 20px;
      margin-top: 30px;
    }
  }
}

.button {
  cursor: pointer;
  font-size: 16px;
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
  justify-content: center;
  padding: 0 135px;
  background-color: #6ea2e6;
  width: 100%;
  box-sizing: border-box;
  height: 50px;

  @media (max-width: 1024px) {
    padding: 0 40px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
    height: auto;
  }

  &__container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    width: 100%;
    max-width: 1200px;
    height: 100%;    

    @media (max-width: 768px) {
      gap: 15px;
      flex-direction: column;
      padding: 15px 0;
    }
  }

  &__logo {
    display: flex;
    align-items: center;
  }

  &__logo-icon {
    position: relative;
    width: 400px;
    height: auto;

    img {
      width: 100%;
      height: auto;
    }

    @media (max-width: 768px) {
      width: 200px;
    }
  }
}
</style>