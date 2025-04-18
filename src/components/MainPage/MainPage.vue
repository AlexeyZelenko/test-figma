<template>
  <main class="main">
    <div class="main-page">
      <div class="header__container">
        <ContentSection />
        <Illustration />
      </div>
      <ContactFormSection />
      <CountdownSection />
      <AchievementSection />
      <FooterSection />
    </div>
  </main>
</template>

<script>
import { defineComponent } from 'vue';
import Illustration from './sections/HeaderSection/Illustration.vue';
import ContentSection from './sections/HeaderSection/ContentSection.vue';
import CountdownSection from './sections/CountdownSection/CountdownSection.vue';
import FooterSection from './sections/FooterSection/FooterSection.vue';
import ContactFormSection from './sections/ContactFormSection/index.vue';
import AchievementSection from './sections/AchievementSection/index.vue';

export default defineComponent({
  name: 'MainPage',
  components: {
    Illustration,
    ContentSection,
    CountdownSection,
    FooterSection,
    ContactFormSection,
    AchievementSection
  }
});
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    width: 100%;
  }
}

.main-page {
  width: 100%;
  background: linear-gradient(to left, #e6effe, #FFFFFF);
}

.header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 235px;
  margin: 0 auto;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    padding: 0 40px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 50px;
    padding: 0 20px;
  }
}
</style> 