// HomeView.vue

<template>
  <div class="home">
    <HeaderSection />
    <LazyComponent :component="SchemeWorkWithUs" />
    <LazyComponent :component="ParallaxSection" />
    <LazyComponent :component="HowWeDoIt" />
    <LazyComponent :component="CountdownSection" />
    <LazyComponent :component="StepsBusinessWithUs" />
    <LazyComponent :component="OurCases" />
    <LazyComponent :component="Case1" />
    <LazyComponent :component="ReviewsSection" />
    <LazyComponent :component="Case2" />
    <LazyComponent :component="PreFooterSection" />
    <LazyComponent :component="WhoWeWorkWith" />
    <LazyComponent :component="AchievementSection" />
    <LazyComponent :component="AchievementSection2" />
    <LazyComponent :component="WhoWeDontWorkWith" />
    <FooterSection />
  </div>
</template>

<script setup>
import { defineComponent, defineAsyncComponent } from 'vue';
import HeaderSection from "../components/MainPage/sections/HeaderSection/index.vue";
import FooterSection from "../components/MainPage/sections/FooterSection/FooterSection.vue";
import LazyComponent from "../components/MainPage/sections/LazyComponent.vue";

// Асинхронные компоненты с использованием defineAsyncComponent
const SchemeWorkWithUs = defineAsyncComponent(() => import('../components/MainPage/sections/SchemeWorkWithUs.vue'));
const ParallaxSection = defineAsyncComponent(() => import('../components/MainPage/sections/ParallaxSection/ParallaxSection.vue'));
const HowWeDoIt = defineAsyncComponent(() => import('../components/MainPage/sections/HowWeDoIt.vue'));
const CountdownSection = defineAsyncComponent(() => import('../components/MainPage/sections/CountdownSection/CountdownSection.vue'));
const StepsBusinessWithUs = defineAsyncComponent(() => import('../components/MainPage/sections/StepsBusinessWithUs.vue'));
const OurCases = defineAsyncComponent(() => import('../components/MainPage/sections/OurCases.vue'));
const Case1 = defineAsyncComponent(() => import('../components/MainPage/sections/Case1.vue'));
const ReviewsSection = defineAsyncComponent(() => import('../components/MainPage/sections/ReviewsSection/ReviewsSection.vue'));
const Case2 = defineAsyncComponent(() => import('../components/MainPage/sections/Case2.vue'));
const PreFooterSection = defineAsyncComponent(() => import('../components/MainPage/sections/PreFooterSection.vue'));
const WhoWeWorkWith = defineAsyncComponent(() => import('../components/MainPage/sections/WhoWeWorkWith.vue'));
const AchievementSection = defineAsyncComponent(() => import('../components/MainPage/sections/AchievementSection/AchievementSection.vue'));
const AchievementSection2 = defineAsyncComponent(() => import('../components/MainPage/sections/AchievementSection2.vue'));
const WhoWeDontWorkWith = defineAsyncComponent(() => import('../components/MainPage/sections/WhoWeDontWorkWith.vue'));
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>