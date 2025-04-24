<template>
  <section id="reviews" class="reviews">
    <div id="reviews" class="reviews__container">
      <h2 class="reviews__title">Відгуки наших клієнтів</h2>

      <div v-if="loading" class="reviews__loading">
        <i class="pi pi-spin pi-spinner" style="font-size: 3rem"></i>
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
              v-for="(review, index) in reviews"
              :key="review.id"
              class="review-card"
              :style="{
                transform: `translateX(${-currentSlide * cardWidth}px)`,
                display: isVisible(index) ? 'flex' : 'none'
              }"
            >
              <div class="review-card__header">
                <img :src="review.imageUrl" :alt="review.name" class="review-card__avatar" />
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
              <button class="review-card__details" @click="openModal(review)">
                ДЕТАЛЬНІШЕ
              </button>
            </div>
          </div>

          <button
            class="slider-button slider-button--next"
            @click="nextSlide"
            :disabled="currentSlide >= maxSlideIndex"
          >
            <i class="pi pi-chevron-right"></i>
          </button>
        </div>

        <div class="reviews__dots">
          <button
            v-for="index in totalDots"
            :key="index - 1"
            class="dot"
            :class="{ 'dot--active': Math.floor(currentSlide / slidesToShow) === index - 1 }"
            @click="goToSlide((index - 1) * slidesToShow)"
          ></button>
        </div>
      </template>
    </div>

    <!-- Модальне вікно -->
    <Dialog
      v-model:visible="modalVisible"
      :style="{ width: '90vw', maxWidth: '500px' }"
      :modal="true"
      :dismissableMask="true"
      @hide="closeModal"
    >
      <template #header>
        <div class="modal-header">
          <h3>{{ selectedReview?.name }}</h3>
        </div>
      </template>

      <div class="modal-content">
        <img 
          :src="selectedReview?.imageUrl" 
          :alt="selectedReview?.name" 
          class="modal-avatar"
        />
        <div class="modal-rating">
          <i
            v-for="star in 5"
            :key="star"
            class="pi pi-star-fill"
            :class="{ 'star-filled': star <= selectedReview?.rating }"
          ></i>
        </div>
        <div class="modal-date">{{ formatDate(selectedReview?.date) }}</div>
        <p class="modal-text">{{ selectedReview?.text }}</p>
      </div>

      <template #footer>
        <Button 
          label="Закрити" 
          icon="pi pi-times" 
          @click="closeModal" 
          class="p-button-text"
        />
      </template>
    </Dialog>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../../../../firebase/config';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';

const reviews = ref([]);
const currentSlide = ref(0);
const slidesToShow = ref(3);
const loading = ref(true);
const error = ref(null);
const cardWidth = ref(350);
const modalVisible = ref(false);
const selectedReview = ref(null);

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

const isVisible = (index) => {
  return index >= currentSlide.value && index < currentSlide.value + slidesToShow.value;
};

const maxSlideIndex = computed(() => {
  return Math.max(0, reviews.value.length - slidesToShow.value);
});

const totalDots = computed(() => {
  return Math.ceil(reviews.value.length / slidesToShow.value);
});

const nextSlide = () => {
  if (currentSlide.value < maxSlideIndex.value) {
    currentSlide.value = Math.min(maxSlideIndex.value, currentSlide.value + slidesToShow.value);
  }
};

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value = Math.max(0, currentSlide.value - slidesToShow.value);
  }
};

const goToSlide = (index) => {
  currentSlide.value = Math.min(maxSlideIndex.value, Math.max(0, index));
};

const openModal = (review) => {
  selectedReview.value = review;
  modalVisible.value = true;
};

const closeModal = () => {
  modalVisible.value = false;
  selectedReview.value = null;
};

onMounted(() => {
  loadReviews();

  const updateSlidesToShow = () => {
    if (window.innerWidth < 768) {
      slidesToShow.value = 1;
      cardWidth.value = window.innerWidth - 40;
    } else if (window.innerWidth < 1024) {
      slidesToShow.value = 2;
      cardWidth.value = (window.innerWidth - 60) / 2;
    } else {
      slidesToShow.value = 3;
      cardWidth.value = (window.innerWidth - 80) / 3;
    }
    currentSlide.value = 0;
  };

  updateSlidesToShow();
  window.addEventListener('resize', updateSlidesToShow);

  return () => {
    window.removeEventListener('resize', updateSlidesToShow);
  };
});
</script>

<style lang="scss" scoped>
@use "sass:color";

.reviews {
  min-height: 550px;
  padding: 60px 0 40px 0;
  background-color: #f8f9fa;

  @media (max-width: 768px) {
    min-height: 450px;
  }

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
    animation: fadeIn 1s ease-out;
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
    overflow: hidden;
    flex: 1;
    transition: transform 0.5s ease-in-out;
  }

  &__dots {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 30px;
    animation: fadeIn 1s ease-out;
    
    @media (max-width: 768px) {
      display: none;
    }
  }
}

.review-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: white;
  margin: 0 5px;
  padding: 30px;
  border-radius: 12px;  
  flex: 1;
  min-width: 0;
  transition: transform 0.3s, opacity 0.3s;
  opacity: 0;
  animation: slideIn 0.5s forwards ease-out;
  position: relative;

  &:hover {
    transform: translateY(-5px);
  }

  &__header {
    display: flex;
    align-items: spase-between;
    margin-bottom: 20px;
  }

  &__avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 16px;
    animation: fadeIn 0.5s forwards ease-out;
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
    animation: fadeIn 0.5s forwards ease-out;
  }

  &__rating {
    display: flex;
    gap: 4px;
    margin-bottom: 8px;
    animation: fadeIn 0.5s forwards ease-out;
  }

  &__date {
    color: #6c757d;
    font-size: 14px;
    animation: fadeIn 0.5s forwards ease-out;
  }

  &__text {
    color: #495057;
    font-size: 16px;
    line-height: 1.5;
    margin: 0;
    animation: fadeIn 0.5s forwards ease-out;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__details {
    display: block;
    margin-top: 15px;
    padding: 8px 16px;
    background-color: #6ea2e6;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
    font-weight: 500;
    width: 100%;

    &:hover {
      background-color: color.adjust(#6ea2e6, $lightness: -10%);
    }
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
  transition: background-color 0.3s, opacity 0.3s;
  opacity: 0.8;
  animation: fadeIn 1s ease-out;

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

/* Стилі для модального вікна */
.modal-header {
  h3 {
    color: #048;
    margin: 0;
  }
}

.modal-content {
  text-align: center;
  padding: 20px;

  .modal-avatar {    
    object-fit: cover;
    margin-bottom: 15px;
  }

  .modal-rating {
    display: flex;
    justify-content: center;
    gap: 4px;
    margin-bottom: 10px;
  }

  .modal-date {
    color: #6c757d;
    font-size: 14px;
    margin-bottom: 15px;
  }

  .modal-text {
    color: #495057;
    font-size: 16px;
    line-height: 1.6;
    text-align: left;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateX(20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
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