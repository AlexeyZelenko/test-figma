<template>
  <section class="parallax">
    <div class="parallax__container">
      <div class="parallax__content">
        <h2 class="parallax__title">Знайдіть свій ідеальний дім у Черкасах!</h2>
        <p class="parallax__text">
          Ми допоможемо вам перетворити мрії про власне житло на реальність. Широкий вибір квартир, будинків та земельних ділянок у найкращих районах міста.
        </p>
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
@mixin font-style($weight, $size) {
  font-family: 'Noto Sans', sans-serif;
  font-weight: $weight;
  font-size: $size;
}

// Variables (keep these)
$text-color: #0f0f0f;
$border-color: #CCCCCC;
$dark-text: #333333;
$white: white;
$primary-color: #217bf4;
$error-color: #EB5757;
$white: white;

.parallax {
  position: relative;
  height: 500px;
  background-image: url('/images/parallax-bg.webp');
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
    @include font-style(400, 1.2rem); /* Example using mixin */
    color: $white;
    max-width: 980px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9); /* Add text shadow for better visibility */
    margin-top: 300px;
    font-size: 36px;
    line-height: 1.5;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);

    @media (max-width: 1024px) {
      font-size: 24px;
    }

    @media (max-width: 768px) {
      font-size: 18px;
      margin-top: 500px;
    }
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
      margin-bottom: 16px;
    }

    &__text {
      font-size: 22px;
    }
  }
}
</style>