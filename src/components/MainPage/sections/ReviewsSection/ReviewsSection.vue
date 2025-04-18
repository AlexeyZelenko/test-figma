<template>
  <section class="reviews">
    <div class="reviews__container">
      <h2 class="reviews__title">Відгуки наших клієнтів</h2>
      
      <div v-if="loading" class="reviews__loading">
        <i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>
      </div>

      <div v-else-if="error" class="reviews__error">
        {{ error }}
      </div>

      <template v-else>
        <div class="reviews__slider">
          <button 
            class="slider-button slider-button--prev" 
            @click="prevSlide"
            :disabled="currentSlide === 0"
          >
            <i class="pi pi-chevron-left"></i>
          </button>

          <div class="reviews__list">
            <div 
              v-for="review in visibleReviews" 
              :key="review.id"
              class="review-card"
            >
              <div class="review-card__header">
                <img :src="review.avatar" :alt="review.name" class="review-card__avatar" />
                <div class="review-card__info">
                  <h3 class="review-card__name">{{ review.name }}</h3>
                  <div class="review-card__rating">
                    <i
                      v-for="star in 5"
                      :key="star"
                      class="pi pi-star-fill"
                      :class="{ 'star-filled': star <= review.rating }"
                    ></i>
                  </div>
                  <div class="review-card__date">{{ formatDate(review.date) }}</div>
                </div>
              </div>
              <p class="review-card__text">{{ review.text }}</p>
            </div>
          </div>

          <button 
            class="slider-button slider-button--next" 
            @click="nextSlide"
            :disabled="currentSlide >= reviews.length - slidesToShow"
          >
            <i class="pi pi-chevron-right"></i>
          </button>
        </div>

        <div class="reviews__dots">
          <button
            v-for="(_, index) in totalDots"
            :key="index"
            class="dot"
            :class="{ 'dot--active': currentSlide >= index * slidesToShow && currentSlide < (index + 1) * slidesToShow }"
            @click="goToSlide(index * slidesToShow)"
          ></button>
        </div>
      </template>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../../../../firebase/config';

export default {
  name: 'ReviewsSection',
  setup() {
    const reviews = ref([]);
    const currentSlide = ref(0);
    const slidesToShow = ref(3);
    const loading = ref(true);
    const error = ref(null);

    const loadReviews = async () => {
      try {
        loading.value = true;
        const q = query(collection(db, 'reviews'), orderBy('date', 'desc'));
        const querySnapshot = await getDocs(q);
        reviews.value = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
      } catch (err) {
        console.error('Error loading reviews:', err);
        error.value = 'Помилка завантаження відгуків';
      } finally {
        loading.value = false;
      }
    };

    const formatDate = (dateString) => {
      if (!dateString) return '';
      const date = new Date(dateString);
      return date.toLocaleDateString('uk-UA', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
    };

    const visibleReviews = computed(() => {
      return reviews.value.slice(currentSlide.value, currentSlide.value + slidesToShow.value);
    });

    const totalDots = computed(() => {
      return Math.ceil(reviews.value.length / slidesToShow.value);
    });

    const nextSlide = () => {
      if (currentSlide.value < reviews.value.length - slidesToShow.value) {
        currentSlide.value += slidesToShow.value;
      }
    };

    const prevSlide = () => {
      if (currentSlide.value > 0) {
        currentSlide.value -= slidesToShow.value;
      }
    };

    const goToSlide = (index) => {
      currentSlide.value = index;
    };

    onMounted(() => {
      loadReviews();
      // Обновляем количество отображаемых слайдов при изменении размера окна
      const updateSlidesToShow = () => {
        if (window.innerWidth < 768) {
          slidesToShow.value = 1;
        } else if (window.innerWidth < 1024) {
          slidesToShow.value = 2;
        } else {
          slidesToShow.value = 3;
        }
      };

      updateSlidesToShow();
      window.addEventListener('resize', updateSlidesToShow);
    });

    return {
      reviews,
      currentSlide,
      visibleReviews,
      totalDots,
      nextSlide,
      prevSlide,
      goToSlide,
      loading,
      error,
      formatDate
    };
  }
};
</script>

<style lang="scss" scoped>
@use "sass:color";

.reviews {
  padding: 80px 0;
  background-color: #f8f9fa;

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
    margin-bottom: 40px;
    font-family: "Noto Sans", sans-serif;
  }

  &__loading {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 200px;
    color: #6ea2e6;
  }

  &__error {
    text-align: center;
    color: #dc3545;
    padding: 20px;
    background: #f8d7da;
    border-radius: 8px;
    margin: 20px 0;
  }

  &__slider {
    position: relative;
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__list {
    display: flex;
    gap: 20px;
    overflow: hidden;
    flex: 1;
  }

  &__dots {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 30px;
  }
}

.review-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  flex: 1;
  min-width: 0;
  transition: transform 0.3s;

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
    object-fit: cover;
    margin-right: 16px;
  }

  &__info {
    flex: 1;
  }

  &__name {
    color: #048;
    font-size: 18px;
    font-weight: 600;
    margin: 0 0 8px;
    font-family: "Noto Sans", sans-serif;
  }

  &__rating {
    display: flex;
    gap: 4px;
    margin-bottom: 8px;
  }

  &__date {
    color: #6c757d;
    font-size: 14px;
  }

  &__text {
    color: #495057;
    font-size: 16px;
    line-height: 1.5;
    margin: 0;
  }
}

.slider-button {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #6ea2e6;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background: color.adjust(#6ea2e6, $lightness: -10%);
    color: white;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  i {
    color: white;
    font-size: 16px;
  }
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #d1d1d1;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &--active {
    background: #6ea2e6;
  }
}

.star-filled {
  color: #ffc107;
}

@media (max-width: 1024px) {
  .reviews {
    padding: 60px 0;
  }
}

@media (max-width: 768px) {
  .reviews {
    padding: 40px 0;

    &__title {
      font-size: 28px;
      margin-bottom: 30px;
    }
  }
}
</style> 