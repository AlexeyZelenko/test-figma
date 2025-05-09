<template>
  <section class="parallax">
    <div class="parallax__container">
      <div class="parallax__content">
        <p class="parallax__text">
          Телефонуйте вже зараз та дізнайтеся як ми зможемо бути Вам корисні
        </p>
        <p>
          <ul>
            <li v-for="(link, linkIndex) in contactsSection.links" :key="linkIndex">
              <i :class="link.icon" style="font-size: 1rem; color: #ffffff"></i>
              <span class="footer__link">{{ link.title }}</span>
            </li>
          </ul>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, onUnmounted, ref } from 'vue';
import 'primeicons/primeicons.css'

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

    const contactsSection = ref({
      title: "КОНТАКТИ",
      links: [
        {
          title: "mn.ck.ua@gmail.com",
          icon: "pi pi-envelope"
        },
        {
          title: "+38 063 473 55 00",
          icon: "pi pi-phone"
        },
        {
          title: "+38 067 473 55 00",
          icon: "pi pi-phone"
        }
      ]
    });

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    // Обязательно возвращаем данные, которые используются в шаблоне
    return {
      contactsSection
    };
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
      font-size: 36px;
    }

    @media (max-width: 768px) {
      font-size: 24px;
      margin-top: 700px;
    }
  }
}

// Добавляем стили для контактов
.footer__link {
  color: $white;
  margin-left: 8px;
  font-size: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
}

ul {
  list-style-type: none;
  padding: 0;
  margin-top: 30px;
}

li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  justify-content: center;
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