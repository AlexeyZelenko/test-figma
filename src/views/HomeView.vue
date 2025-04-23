<template>
  <div class="home">
    <HeaderSection />
    <SchemeWorkWithUs />
    <ParallaxSection />
    <HowWeDoIt />
    <CountdownSection />
    <StepsBusinessWithUs />
    <OurCases />
    <Case1 />
    <ReviewsSection />
    <Case2 />
    <PreFooterSection />
    <WhoWeWorkWith />
    <AchievementSection />
    <IndividualBonuses />
    <WhoWeDontWorkWith />
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
import PreFooterSection from "../components/MainPage/sections/PreFooterSection.vue";
import FooterSection from "../components/MainPage/sections/FooterSection/FooterSection.vue";
import SchemeWorkWithUs from '../components/MainPage/sections/SchemeWorkWithUs.vue';
import HowWeDoIt from '../components/MainPage/sections/HowWeDoIt.vue';
import StepsBusinessWithUs from '../components/MainPage/sections/StepsBusinessWithUs.vue';
import WhoWeWorkWith from '../components/MainPage/sections/WhoWeWorkWith.vue';
import Case1 from '../components/MainPage/sections/Case1.vue';
import Case2 from '../components/MainPage/sections/Case2.vue';
import IndividualBonuses from '../components/MainPage/sections/IndividualBonuses.vue';
import WhoWeDontWorkWith from '../components/MainPage/sections/WhoWeDontWorkWith.vue';
import OurCases from '../components/MainPage/sections/OurCases.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    HeaderSection,
    CountdownSection,
    AchievementSection,
    ReviewsSection,
    ParallaxSection,
    FooterSection,
    PreFooterSection,
    SchemeWorkWithUs,
    HowWeDoIt,
    StepsBusinessWithUs,
    WhoWeWorkWith,
    Case1,
    Case2,
    IndividualBonuses,
    WhoWeDontWorkWith,
    OurCases
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