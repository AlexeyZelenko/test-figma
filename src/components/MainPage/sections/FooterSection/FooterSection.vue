<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__content">
        <div class="footer__navigation">
          <div v-for="(section, index) in footerNavigation" :key="index" class="footer__section">
            <h3 class="footer__title">{{ section.title }}</h3>
            <ul>
              <li v-for="(link, linkIndex) in section.links" :key="linkIndex">
                <a href="#" class="footer__link">{{ link }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer__subscribe">
          <h3 class="footer__title">Subscribe Cirkle Newsletter</h3>
          <p class="footer__text">Subscribe to be the first one to know about updates. Enter your email</p>
          <div class="footer__input-group">
            <input type="email" placeholder="Email Address" class="footer__input" />
            <button class="footer__button">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="container footer__bottom-content">
        <p class="footer__text">Besnik Creative Agency.</p>
        <div class="footer__logo">
          <img src="/logo.svg" alt="Logo" />
          <span class="footer__logo-text">Netbook</span>
        </div>
        <div class="footer__social">
          <button v-for="(social, index) in socialIcons" :key="index" class="footer__social-button">
            <img :src="social.icon" alt="Social Icon" />
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

const footerNavigation = ref([
  { title: "Home", links: ["Home", "Community", "Events", "Contact"] },
  { title: "Resources", links: ["Blog", "News", "Guides", "Help Center"] },
  { title: "Community", links: ["NewsFeed", "Profile", "Friends", "Forums"] },
  { title: "Main links", links: ["Members", "Activity", "Groups", "Private Group"] }
]);

const socialIcons = ref([
  { icon: "/facebook.svg", name: "Facebook" },
  { icon: "/Twitter.svg", name: "Twitter" },
  { icon: "/instagram.svg", name: "Instagram" },
  { icon: "/Linkedin.svg", name: "Linkedin" }
]);
</script>

<style lang="scss" scoped>
.footer {
  background: #2b2b39;
  color: #e6e6e6;
  padding: 4rem 0 0;

  @media (max-width: 768px) {
    padding: 2rem 0 0;
  }

  &__container {
    width: 100%;
    max-width: 1200px;
    margin: 50px auto;
    padding: 0 20px;
    box-sizing: border-box;

    @media (max-width: 768px) {
      margin: 30px auto;
    }
  }

  &__content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2rem;

    @media (max-width: 1024px) {
      gap: 3rem;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 2rem;
    }
  }

  &__navigation {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    flex-wrap: wrap;
    flex: 1;

    @media (max-width: 1024px) {
      gap: 1.5rem;
    }

    @media (max-width: 768px) {
      gap: 3rem;
      width: 100%;
    }
  }

  &__section {
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      margin-bottom: 0;
      width: 40%;
    }

    ul {
      display: flex;
      flex-direction: column;
      list-style: none;
      padding: 20px 0 0;
      gap: 1.1rem;

      @media (max-width: 768px) {
        padding: 10px 0 0;
      }
    }
  }

  &__title {
    color: white;
    font-size: 1.25rem;
    margin-bottom: 1rem;
    width: 170px;

    @media (max-width: 768px) {
      width: 100%;
      margin-bottom: 0.5rem;
    }
  }

  &__link {
    color: #e6e6e6;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s ease;

    &:hover {
      color: #217bf4;
    }
  }

  &__subscribe {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 340px;
    gap: 1rem;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  &__text {
    font-size: 1rem;
    margin-bottom: 1rem;
    width: 300px;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  &__input-group {
    display: flex;
    border: 1px solid white;
    border-radius: 10px;
    overflow: hidden;

    @media (max-width: 768px) {
      gap: 1px;
      //background: white;
    }
  }

  &__input {
    flex: 1;
    border: none;
    background: transparent;
    padding: 0.8rem;
    color: white;
    min-width: 0;

    @media (max-width: 768px) {
      color: #717179;
    }

    &::placeholder {
      color: #717179;

      @media (max-width: 768px) {
        color: #717179;
      }
    }
  }

  &__button {
    background: white;
    color: #2b2b39;
    padding: 0.8rem 1.5rem;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    white-space: nowrap;

    &:hover {
      background: #217bf4;
      color: white;
    }

    @media (max-width: 768px) {
      padding: 0.8rem;
    }
  }

  &__bottom {
    background: #20202c;
    padding: 1.5rem 0;

    @media (max-width: 768px) {
      padding: 1rem 0;
    }
  }

  &__bottom-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 1rem;
      text-align: center;
    }
  }

  &__logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  &__logo-text {
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
  }

  &__social {
    display: flex;
    gap: 0.5rem;

    @media (max-width: 768px) {
      margin-top: 1rem;
    }
  }

  &__social-button {
    width: 2.5rem;
    height: 2.5rem;
    background: white;
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;

    @media (max-width: 768px) {
      width: 2rem;
      height: 2rem;
    }

    img {
      width: 2rem;
      height: 2rem;
      transition: all 0.3s ease;

      @media (max-width: 768px) {
        width: 1.5rem;
        height: 1.5rem;
      }

      &:hover {
        transform: scale(1.2);
      }
    }
  }
}
</style>