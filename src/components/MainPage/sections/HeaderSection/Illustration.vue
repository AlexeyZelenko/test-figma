<template>
  <div class="illustration">
    <!-- <img
        class="header__vector"
        alt="Vector"
        src="/custom_vector1.svg"
    /> -->
    <img
        class="header__vector"
        alt="Vector"
        src="/images/figure_businessman.jpg"
    />
  </div>
</template>

<script>
export default {
  name: 'Illustration'
}
</script>

<style lang="scss" scoped>
.illustration {
  position: relative;
  width: 100%;
  max-width: 586px;
  height: 701px;
  margin-left: auto;
  margin-right: 135px;

  @media (max-width: 1024px) {
    margin-right: 0;
    max-width: 450px;
    height: 400px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    height: 300px;
    margin: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>