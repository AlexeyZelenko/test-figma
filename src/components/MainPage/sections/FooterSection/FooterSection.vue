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
    <Bottom />
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

  &__container {
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    height: 220px;
    margin: 50px auto;
  }

  &__content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &__navigation {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    height: 220px;
  }

  &__section {
    margin-bottom: 1rem;

    ul {
      display: flex;
      flex-direction: column;
      justify-content: end;
      list-style: none;
      padding: 20px 0 0;
    }

    li {
      margin-bottom: 1.1rem;
    }
  }

  &__title {
    color: white;
    font-size: 1.25rem;
    margin-bottom: 1rem;
    width: 150px;
  }

  &__link {
    color: #e6e6e6;
    text-decoration: none;
    font-size: 1rem;
  }

  &__subscribe {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 340px;
  }

  &__text {
    font-size: 1rem;
    margin-bottom: 1rem;
    width: 300px;
  }

  &__input-group {
    display: flex;
    border: 1px solid white;
    border-radius: 10px;
    overflow: hidden;
  }

  &__input {
    flex: 1;
    border: none;
    background: transparent;
    padding: 0.5rem;
    color: white;
  }

  &__button {
    background: white;
    color: #2b2b39;
    padding: 0.5rem 1rem;
    border: none;
    cursor: pointer;
  }

  &__bottom {
    background: #20202c;
    padding: 1.5rem 0;
  }

  &__bottom-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
  }
}
</style>
