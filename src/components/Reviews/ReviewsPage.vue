<template>
  <div class="reviews">
    <h1 class="reviews__title">Відгуки наших клієнтів</h1>
    <div class="reviews__list">
      <div v-for="review in reviews" :key="review.id" class="review-card">
        <div class="review-card__header">
          <div class="review-card__avatar">
            <img :src="review.avatar" :alt="review.name" />
          </div>
          <div class="review-card__info">
            <h3 class="review-card__name">{{ review.name }}</h3>
            <div class="review-card__date">{{ review.date }}</div>
          </div>
        </div>
        <div class="review-card__content">
          <p>{{ review.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ReviewsPage',
  data() {
    return {
      reviews: [
        {
          id: 1,
          name: 'Олена Петренко',
          avatar: '/images/reviews/avatar1.jpg',
          date: '15.03.2024',
          text: 'Дуже задоволена співпрацею з "Магазином Нерухомості"! Професійний підхід, швидкий пошук відповідних варіантів та чудовий сервіс. Знайшли квартиру своєї мрії за оптимальною ціною.'
        },
        {
          id: 2,
          name: 'Михайло Коваленко',
          avatar: '/images/reviews/avatar2.jpg',
          date: '10.03.2024',
          text: 'Звернувся до агентства для продажу будинку. Все пройшло на найвищому рівні - від оцінки майна до оформлення документів. Рекомендую всім, хто шукає надійного партнера у сфері нерухомості.'
        },
        {
          id: 3,
          name: 'Ірина Василенко',
          avatar: '/images/reviews/avatar3.jpg',
          date: '05.03.2024',
          text: 'Вражена якістю обслуговування! Менеджери компанії допомогли знайти ідеальне приміщення для мого бізнесу. Всі питання вирішувались оперативно та професійно.'
        }
      ]
    };
  }
});
</script>

<style lang="scss" scoped>
.reviews {
  padding: 40px 235px;
  background-color: #f8f9fa;
  min-height: calc(100vh - 180px);

  &__title {
    text-align: center;
    color: #048;
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 40px;
    font-family: "Noto Sans", sans-serif;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
  }

  @media (max-width: 1024px) {
    padding: 40px 40px;
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
}

.review-card {
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  &__header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  &__avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 16px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__info {
    flex: 1;
  }

  &__name {
    color: #048;
    font-size: 18px;
    font-weight: 600;
    margin: 0 0 4px;
    font-family: "Noto Sans", sans-serif;
  }

  &__date {
    color: #6c757d;
    font-size: 14px;
  }

  &__content {
    color: #495057;
    font-size: 16px;
    line-height: 1.6;
    font-family: "Noto Sans", sans-serif;

    p {
      margin: 0;
    }
  }
}
</style> 