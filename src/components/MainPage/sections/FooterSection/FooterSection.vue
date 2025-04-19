<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__content">
        <div class="footer__navigation">
          <div v-for="(section, index) in footerNavigation" :key="index" class="footer__section">
            <h3 class="footer__title">{{ section.title }}</h3>
            <ul>
              <li v-for="(link, linkIndex) in section.links" :key="linkIndex">
                <i :class="link.icon" style="font-size: 1rem; color: #4f4b4b"></i>
                <span class="footer__link">{{ link.title }}</span>                
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div class="footer__navigation">
            <a href="https://maps.app.goo.gl/W8ZcvN74tryqwtKS7" target="_blank">
            <div v-for="(section, index) in footerNavigation" :key="index" class="footer__section">
              <h3 class="footer__title text-transform-uppercase">КАРТА ПРОЇЗДУ</h3>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10383.326234943557!2d32.025509!3d49.412091!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d14bf9bf9fa979%3A0x39bd8294c48077a0!2sSmilyans&#39;ka%20St%2C%2044%2C%20Cherkasy%2C%20Cherkas&#39;ka%20oblast%2C%20Ukraine%2C%2018000!5e0!3m2!1sen!2sus!4v1744983821423!5m2!1sen!2sus" width="350" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </a>
        </div>
        </div>
        <div class="footer__subscribe">
          <h3 class="footer__title">ЗВОРОТНІЙ ЗВ'ЯЗОК</h3>
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
        <button v-for="(social, index) in socialIcons" :key="index" class="footer__social-button">
            <img :src="`/test-figma/${social.icon}`" alt="Social Icon" />
        </button>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';
import 'primeicons/primeicons.css'


const footerNavigation = ref([
  { title: "КОНТАКТИ", links: [
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
    },
    {
      title: "+38 050 473 55 00",
      icon: "pi pi-phone"
    },
    {
      title: "+38 0472 50 50 45",
      icon: "pi pi-phone"
    }
  ] }  
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

  background-image: url(/images/background-outer-wrapper.png);
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-color: #fff;


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
    width: 100%;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      margin-bottom: 0;
      width: 100%;
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
    color: #048;
    font-size: 1.25rem;
    margin-bottom: 1rem;
    
    &:after {
        content: "";
        display: block;
        width: 100%;
        border-top: 1px solid #FFAA00;
        margin: 10px 0px;
    }

    @media (max-width: 768px) {
      width: 100%;
      margin-bottom: 0.5rem;
    }
  }

  &__link {
    color: #4f4b4b;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s ease;
    font-weight: 500;    
    margin-left: 10px;

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
    width: 340px;

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
    max-width: 400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;    
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