<template>
  <main class="main">
    <div>
      <HeaderSection />
      <ContactFormSection />
      <CountdownSection />
      <AchievementSection />
      <FooterSection />
    </div>
  </main>
</template>

<script>
import HeaderSection from "./components/MainPage/sections/HeaderSection/index.vue";
import CountdownSection from "./components/MainPage/sections/CountdownSection/CountdownSection.vue";
import FooterSection from "./components/MainPage/sections/FooterSection/FooterSection.vue";
import ContactFormSection from "./components/MainPage/sections/ContactFormSection/index.vue";
import AchievementSection from "./components/MainPage/sections/AchievementSection/index.vue";

export default {
  name: "App",
  components: {
    HeaderSection,
    CountdownSection,
    FooterSection,
    ContactFormSection,
    AchievementSection,
  },
};
</script>


<style lang="scss" scoped>
main {
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  > div {
    width: 100%;
  }
}
</style>