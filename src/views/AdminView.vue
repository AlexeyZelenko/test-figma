<template>
  <div class="admin">
    <div class="admin__header">
        <router-link to="/" class="back-button">
        <i class="pi pi-arrow-left"></i>
        На головну
      </router-link>
      <h1 class="admin__title">Панель адміністратора</h1>
      <button @click="handleLogout" class="logout-button">
        <i class="pi pi-sign-out"></i>
        Вийти
      </button>
      
    </div>

    <div class="admin__content">
      <div class="reviews-form">
        <h2 class="reviews-form__title">
          {{ isEditing ? 'Редагувати відгук' : 'Додати новий відгук' }}
        </h2>
        <form @submit.prevent="handleSubmit" class="reviews-form__form">
          <div class="form-group">
            <label for="name">Ім'я клієнта:</label>
            <input
              type="text"
              id="name"
              v-model="form.name"
              required
              class="form-input"
            />
          </div>

          <div class="form-group">
            <label for="rating">Рейтинг:</label>
            <div class="rating-input">
              <i
                v-for="star in 5"
                :key="star"
                class="pi pi-star-fill"
                :class="{ 'star-filled': star <= form.rating }"
                @click="form.rating = star"
              ></i>
            </div>
          </div>

          <div class="form-group">
            <label for="text">Текст відгуку:</label>
            <textarea
              id="text"
              v-model="form.text"
              required
              class="form-input form-input--textarea"
            ></textarea>
          </div>

          <div class="form-group">
            <label for="avatar">Фото:</label>
            <input
              type="file"
              id="avatar"
              ref="fileInput"
              @change="handleFileChange"
              accept="image/*"
              class="form-input"
            />
            <div v-if="form.avatar" class="preview-image">
              <img :src="URL.createObjectURL(form.avatar)" alt="Preview" />
            </div>
          </div>

          <div v-if="error" class="error">
            {{ error }}
          </div>

          <div class="form-actions">
            <button 
              type="submit" 
              class="submit-button" 
              :disabled="loading"
            >
              {{ loading ? 'Збереження...' : (isEditing ? 'Оновити відгук' : 'Додати відгук') }}
            </button>
            <button 
              v-if="isEditing" 
              type="button" 
              @click="cancelEditing" 
              class="cancel-button"
            >
              Скасувати
            </button>
          </div>
        </form>
      </div>

      <div class="reviews-list">
        <h2 class="reviews-list__title">Існуючі відгуки</h2>
        <div class="reviews-list__content">
          <div v-for="review in reviews" :key="review.id" class="review-item">
            <div class="review-item__header">
              <img :src="review.avatar" :alt="review.name" class="review-item__avatar" />
              <div class="review-item__info">
                <h3 class="review-item__name">{{ review.name }}</h3>
                <div class="review-item__rating">
                  <i
                    v-for="star in 5"
                    :key="star"
                    class="pi pi-star-fill"
                    :class="{ 'star-filled': star <= review.rating }"
                  ></i>
                </div>
                <div class="review-item__date">{{ review.date }}</div>
              </div>
              <div class="review-item__actions">
                <button @click="startEditing(review)" class="edit-button">
                  <i class="pi pi-pencil"></i>
                </button>
                <button @click="deleteReview(review.id)" class="delete-button">
                  <i class="pi pi-trash"></i>
                </button>
              </div>
            </div>
            <p class="review-item__text">{{ review.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { 
  collection, 
  addDoc, 
  getDocs, 
  deleteDoc,
  doc,
  serverTimestamp,
  query,
  orderBy,
  updateDoc
} from 'firebase/firestore';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../firebase/config';

export default {
  name: 'AdminView',
  setup() {
    const store = useStore();
    const router = useRouter();
    const reviews = ref([]);
    const error = ref(null);
    const loading = ref(false);
    const fileInput = ref(null);
    const isEditing = ref(false);
    const currentReviewId = ref(null);

    const form = ref({
      name: '',
      rating: 5,
      text: '',
      avatar: null
    });

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        form.value.avatar = file;
      }
    };

    const uploadImage = async (file) => {
      try {
        const imageRef = storageRef(storage, `reviews/${Date.now()}_${file.name}`);
        await uploadBytes(imageRef, file);
        return await getDownloadURL(imageRef);
      } catch (err) {
        console.error('Error uploading image:', err);
        throw new Error('Помилка завантаження зображення');
      }
    };

    const startEditing = (review) => {
      isEditing.value = true;
      currentReviewId.value = review.id;
      form.value = {
        name: review.name,
        rating: review.rating,
        text: review.text,
        avatar: null
      };
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const cancelEditing = () => {
      isEditing.value = false;
      currentReviewId.value = null;
      form.value = {
        name: '',
        rating: 5,
        text: '',
        avatar: null
      };
      if (fileInput.value) {
        fileInput.value.value = '';
      }
    };

    const updateReview = async () => {
      loading.value = true;
      error.value = null;

      try {
        const reviewData = {
          name: form.value.name,
          rating: form.value.rating,
          text: form.value.text,
          updatedAt: serverTimestamp()
        };

        if (form.value.avatar) {
          const avatarUrl = await uploadImage(form.value.avatar);
          reviewData.avatar = avatarUrl;
        }

        await updateDoc(doc(db, 'reviews', currentReviewId.value), reviewData);

        cancelEditing();
        await loadReviews();
      } catch (err) {
        console.error('Error updating review:', err);
        error.value = err.message || 'Помилка оновлення відгуку';
      } finally {
        loading.value = false;
      }
    };

    const handleSubmit = async () => {
      if (isEditing.value) {
        await updateReview();
      } else {
        loading.value = true;
        error.value = null;

        try {
          let avatarUrl = '';
          if (form.value.avatar) {
            avatarUrl = await uploadImage(form.value.avatar);
          }

          await addDoc(collection(db, 'reviews'), {
            name: form.value.name,
            rating: form.value.rating,
            text: form.value.text,
            avatar: avatarUrl,
            date: new Date().toLocaleDateString('uk-UA'),
            createdAt: serverTimestamp()
          });

          form.value = {
            name: '',
            rating: 5,
            text: '',
            avatar: null
          };

          if (fileInput.value) {
            fileInput.value.value = '';
          }

          await loadReviews();
        } catch (err) {
          console.error('Error adding review:', err);
          error.value = err.message || 'Помилка додавання відгуку';
        } finally {
          loading.value = false;
        }
      }
    };

    const loadReviews = async () => {
      try {
        const q = query(collection(db, 'reviews'), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        reviews.value = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
      } catch (err) {
        console.error('Error loading reviews:', err);
        error.value = 'Помилка завантаження відгуків';
      }
    };

    const deleteReview = async (id) => {
      if (confirm('Ви впевнені, що хочете видалити цей відгук?')) {
        try {
          await deleteDoc(doc(db, 'reviews', id));
          await loadReviews();
        } catch (err) {
          console.error('Error deleting review:', err);
          error.value = 'Помилка видалення відгуку';
        }
      }
    };

    const handleLogout = async () => {
      await store.dispatch('logout');
      router.push('/login');
    };

    onMounted(loadReviews);

    return {
      reviews,
      form,
      error,
      loading,
      fileInput,
      isEditing,
      currentReviewId,
      handleSubmit,
      handleFileChange,
      deleteReview,
      handleLogout,
      startEditing,
      cancelEditing
    };
  }
};
</script>

<style lang="scss" scoped>
.admin {
  padding: 40px;
  min-height: 100vh;
  background-color: #f8f9fa;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
  }

  &__title {
    color: #048;
    font-size: 28px;
    font-weight: 700;
    font-family: "Noto Sans", sans-serif;
  }

  &__content {
    display: grid;
    grid-template-columns: 400px 1fr;
    gap: 40px;

    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
    }
  }
}

.reviews-form {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  &__title {
    color: #048;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 24px;
    font-family: "Noto Sans", sans-serif;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}

.reviews-list {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  &__title {
    color: #048;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 24px;
    font-family: "Noto Sans", sans-serif;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}

.review-item {
  padding: 20px;
  border: 1px solid #dee2e6;
  border-radius: 8px;

  &__header {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }

  &__avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 16px;
  }

  &__info {
    flex: 1;
  }

  &__name {
    color: #048;
    font-size: 16px;
    font-weight: 600;
    margin: 0 0 4px;
    font-family: "Noto Sans", sans-serif;
  }

  &__rating {
    display: flex;
    gap: 4px;
    margin-bottom: 4px;
  }

  &__date {
    color: #6c757d;
    font-size: 14px;
  }

  &__text {
    color: #495057;
    font-size: 14px;
    line-height: 1.5;
    margin: 0;
  }
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    color: #495057;
    font-size: 14px;
    font-weight: 500;
  }
}

.form-input {
  height: 40px;
  padding: 0 12px;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  font-size: 14px;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #6ea2e6;
  }

  &--textarea {
    height: 100px;
    padding: 12px;
    resize: vertical;
  }
}

.rating-input {
  display: flex;
  gap: 4px;

  i {
    font-size: 20px;
    color: #d1d1d1;
    cursor: pointer;

    &.star-filled {
      color: #ffc107;
    }
  }
}

.submit-button {
  height: 40px;
  background: #6ea2e6;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
  padding: 0 20px;

  &:hover {
    background: darken(#6ea2e6, 10%);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
}

.logout-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: #dc3545;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background: darken(#dc3545, 10%);
  }
}

.delete-button {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background: darken(#dc3545, 10%);
  }
}

.error {
  color: #dc3545;
  font-size: 14px;
  text-align: center;
}

i.pi {
  font-size: 14px;

  &.star-filled {
    color: #ffc107;
  }
}

.preview-image {
  margin-top: 10px;
  
  img {
    max-width: 200px;
    max-height: 200px;
    border-radius: 8px;
    object-fit: cover;
  }
}

.form-input[type="file"] {
  padding: 8px;
  height: auto;
}

.form-actions {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.cancel-button {
  height: 40px;
  background: #6c757d;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  padding: 0 20px;
  transition: background-color 0.3s;

  &:hover {
    background: darken(#6c757d, 10%);
  }
}

.review-item__actions {
  display: flex;
  gap: 8px;
}

.edit-button {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #6ea2e6;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background: darken(#6ea2e6, 10%);
  }
}
</style> 