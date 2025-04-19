<template>
  <div class="home">
    <HeaderSection />
    <ParallaxSection />
    <CountdownSection />
    <AchievementSection />
    <ReviewsSection />
<!--    <ContactFormSection />-->
    <PreFooterSection />
    <FooterSection />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import HeaderSection from "../components/MainPage/sections/HeaderSection/index.vue";
import CountdownSection from "../components/MainPage/sections/CountdownSection/CountdownSection.vue";
import AchievementSection from "../components/MainPage/sections/AchievementSection/AchievementSection.vue";
import ReviewsSection from "../components/MainPage/sections/ReviewsSection/ReviewsSection.vue";
import ParallaxSection from "../components/MainPage/sections/ParallaxSection/ParallaxSection.vue";
import ContactFormSection from "../components/MainPage/sections/ContactFormSection/index.vue";
import PreFooterSection from "../components/MainPage/sections/PreFooterSection.vue";
import FooterSection from "../components/MainPage/sections/FooterSection/FooterSection.vue";

export default defineComponent({
  name: 'HomeView',
  components: {
    HeaderSection,
    CountdownSection,
    AchievementSection,
    ReviewsSection,
    ParallaxSection,
    ContactFormSection,
    FooterSection,
    PreFooterSection
  }
});
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style> 