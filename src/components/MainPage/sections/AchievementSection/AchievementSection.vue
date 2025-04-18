<template>
  <section class="achievements">
    <div class="achievements__container">
      <h2 class="achievements__title">Наші досягнення</h2>
      <div class="achievements__grid">
        <div class="achievement-card">
          <div class="achievement-card__icon">
            <i class="pi pi-home"></i>
          </div>
          <h3 class="achievement-card__number">1000+</h3>
          <p class="achievement-card__text">Успішно проданих об'єктів</p>
        </div>

        <div class="achievement-card">
          <div class="achievement-card__icon">
            <i class="pi pi-users"></i>
          </div>
          <h3 class="achievement-card__number">500+</h3>
          <p class="achievement-card__text">Задоволених клієнтів</p>
        </div>

        <div class="achievement-card">
          <div class="achievement-card__icon">
            <i class="pi pi-star"></i>
          </div>
          <h3 class="achievement-card__number">5+</h3>
          <p class="achievement-card__text">Років на ринку</p>
        </div>

        <div class="achievement-card">
          <div class="achievement-card__icon">
            <i class="pi pi-map-marker"></i>
          </div>
          <h3 class="achievement-card__number">50+</h3>
          <p class="achievement-card__text">Районів міста</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AchievementSection'
});
</script>

<style lang="scss" scoped>
.achievements {
  padding: 80px 0;
  background-color: #fff;

  &__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  &__title {
    color: #048;
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 50px;
    font-family: "Noto Sans", sans-serif;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
}

.achievement-card {
  background: #f8f9fa;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  &__icon {
    width: 60px;
    height: 60px;
    background: #6ea2e6;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;

    i {
      font-size: 24px;
      color: white;
    }
  }

  &__number {
    color: #048;
    font-size: 36px;
    font-weight: 700;
    margin: 0 0 10px;
    font-family: "Noto Sans", sans-serif;
  }

  &__text {
    color: #495057;
    font-size: 16px;
    line-height: 1.5;
    margin: 0;
  }
}

@media (max-width: 1024px) {
  .achievements {
    padding: 60px 0;
  }
}

@media (max-width: 768px) {
  .achievements {
    padding: 40px 0;

    &__title {
      font-size: 28px;
      margin-bottom: 30px;
    }
  }
}
</style> 