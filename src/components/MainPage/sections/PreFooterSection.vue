<template>
  <section class="contact-form">
    <div class="container">
      <div class="contact-form__content">
        <h2 class="contact-form__title">Професійні консультації з нерухомості</h2>
        <p class="contact-form__text">
          Наша команда експертів готова надати вам кваліфіковану допомогу у всіх питаннях, пов'язаних з купівлею, продажем або орендою нерухомості.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
// You can add any necessary script logic here if needed
</script>

<style lang="scss" scoped>
// Mixins (keep these)
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

.contact-form {
  height: 500px;
  padding: 40px 20px;
  text-align: center;
  background-image: url(/images/parallax-bg.webp);
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-color: $primary-color; /* You can keep this for a fallback */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative; /* Needed for pseudo-element positioning */
}

.contact-form::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(90, 95, 101, 0.5); /* Adjust color and opacity */
  /* Or, if you want to use your variable: */
  /* background-color: rgba(red($primary-color), green($primary-color), blue($primary-color), 0.5); */
  z-index: 1; /* Make sure it's behind the content */
}

.contact-form__content {
  position: relative; /* Bring content forward */
  z-index: 2;
  /* Add other styles for your content here */
}

.contact-form__container {
  max-width: 600px; /* Adjust as needed */
  margin: 0 auto;
}

.contact-form__title {
  @include font-style(700, 2.5rem); /* Example using mixin */
  color: $white;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9); /* Add text shadow for better visibility */

  @media (max-width: 768px) {
    font-size: 2rem;
  }
}

.contact-form__text {
  margin: 0 auto;
  @include font-style(400, 2rem); /* Example using mixin */
  color: $white;
  max-width: 980px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9); /* Add text shadow for better visibility */

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
}
</style>