<template>
  <section class="parallax">
    <div class="parallax__container">
      <div class="parallax__content">
        
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, onUnmounted } from 'vue';

export default {
  name: 'ParallaxSection',
  setup() {
    const handleScroll = () => {
      const content = document.querySelector('.parallax__content');
      if (content) {
        const scrolled = window.pageYOffset;
        content.style.transform = `translateY(${scrolled * 0.3}px)`; // Зменшено ефект
      }
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });
  }
};
</script>

<style lang="scss" scoped>
.parallax {
  position: relative;
  height: 500px;
  background-image: url('/test-figma/images/parallax-bg.jpg');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  &__container {
    padding-bottom: 500px;
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    overflow: hidden; /* Додано для запобігання виходу контенту */

    @media (max-width: 1024px) {
      padding-bottom: 400px;
    }

    @media (max-width: 768px) {
      padding-bottom: 300px;
    }
  }

  &__content {
    max-width: 800px;
    text-align: center;
    padding: 0 20px 0;
    transition: transform 0.2s ease-out; /* Додано для плавності */

    @media (max-width: 1024px) {
      padding: 0 20px 50px;
    }

    @media (max-width: 768px) {
      padding: 0 20px 350px;
    }
  }

  &__title {
    color: white;
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 20px;
    font-family: "Noto Sans", sans-serif;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  &__text {
    color: white;
    font-size: 20px;
    line-height: 1.5;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
}

@media (max-width: 1024px) {
  .parallax {
    height: 400px;

    &__title {
      font-size: 36px;
    }

    &__text {
      font-size: 18px;
    }
  }
}

@media (max-width: 768px) {
  .parallax {
    height: 300px;

    &__title {
      font-size: 28px;
      margin-bottom: 15px;
    }

    &__text {
      font-size: 16px;
    }
  }
}
</style>